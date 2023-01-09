#!/usr/bin/env ts-node

/**
 * Generate the mjml components
 *
 * usage `node --require ts-node/register scripts/generate-mjml-react.ts`
 */
import * as del from "del";
import * as fs from "fs";
import camelCase from "lodash.camelcase";
import upperFirst from "lodash.upperfirst";
import * as path from "path";

import { typeToUnit } from "../src/utils";

const MJML_REACT_DIR = "src";

const UTILS_FILE = "utils";
const MJML_COMPONENTS_FOLDER = "mjml";

const GENERATED_HEADER_TSX = `
/*
 * This file is generated. Don't edit it directly.
 * Modify \`scripts/generate-mjml-react.ts\` to make changes to these files
 */
`;

interface IMjmlComponent {
  componentName: string;
  allowedAttributes?: Record<string, string>;
  defaultAttributes?: Record<string, string>;
  endingTag?: true;
}

const PRESET_CORE_COMPONENTS: Array<IMjmlComponent> =
  require("mjml-preset-core").components;
const OTHER_SUPPORTED_COMPONENTS = [
  "mjml",
  "mj-all",
  "mj-class",
  "mj-include",
  "mj-html-attribute",
  "mj-selector",
];

const MJML_COMPONENTS_TO_GENERATE = [
  ...OTHER_SUPPORTED_COMPONENTS.map(
    (componentName) => ({ componentName } as IMjmlComponent)
  ),
  ...PRESET_CORE_COMPONENTS,
];

const MJML_COMPONENT_NAMES = MJML_COMPONENTS_TO_GENERATE.map(
  (component) => component.componentName
);

const ATTRIBUTES_TO_USE_CSSProperties_WITH = new Set([
  "color",
  "textAlign",
  "verticalAlign",
  "textDecoration",
  "textTransform",

  "border",
  "borderRadius",
  "borderColor",
  "borderStyle",

  "backgroundColor",
  "backgroundPosition",
  "backgroundRepeat",
  "backgroundSize",
]);

const TYPE_OVERRIDE: { [componentName: string]: { [prop: string]: string } } = {
  mjml: { owa: "string", lang: "string" },
  "mj-style": { inline: "boolean" },
  "mj-class": { name: "string" },
  "mj-table": { cellspacing: "string", cellpadding: "string" },
  "mj-selector": { path: "string" },
  "mj-html-attribute": { name: "string" },
  "mj-include": { path: "string" },
  "mj-breakpoint": { width: "string" },
};

const HAS_CSS_CLASS = new Set(
  MJML_COMPONENT_NAMES.filter(
    (element) =>
      ![
        "mjml",
        "mj-style",
        "mj-class",
        "mj-breakpoint",
        "mj-include",
        "mj-selector",
        "mj-html-attribute",
      ].includes(element)
  )
);

const HAS_CHILDREN = new Set(
  MJML_COMPONENT_NAMES.filter(
    (element) =>
      ![
        "mj-all",
        "mj-include",
        "mj-breakpoint",
        "mj-class",
        "mj-divider",
        "mj-image",
        "mj-spacer",
      ].includes(element)
  )
);

const ALLOW_ANY_PROPERTY = new Set(
  MJML_COMPONENT_NAMES.filter((element) =>
    ["mj-class", "mj-all"].includes(element)
  )
);

function getPropTypeFromMjmlAttributeType(
  attribute: string,
  mjmlAttributeType: string
): string {
  if (attribute === "fullWidth") {
    return "boolean";
  }
  if (ATTRIBUTES_TO_USE_CSSProperties_WITH.has(attribute)) {
    return `React.CSSProperties["${attribute}"]`;
  }
  if (mjmlAttributeType.startsWith("unit")) {
    const validUnitTypes: string[] = Object.keys(typeToUnit).filter((type) =>
      mjmlAttributeType.includes(typeToUnit[type as keyof typeof typeToUnit])
    );
    if (mjmlAttributeType.endsWith("{1,4}")) {
      return `Matrix<${validUnitTypes.join(" | ")}>`;
    }
    return validUnitTypes.join(" | ");
  }
  if (mjmlAttributeType === "boolean") {
    return "boolean";
  }
  if (mjmlAttributeType === "integer") {
    return "number";
  }
  // e.g. "vertical-align": "enum(top,bottom,middle)"
  if (mjmlAttributeType.startsWith("enum")) {
    return (
      mjmlAttributeType
        .match(/\(.*\)/)?.[0]
        ?.slice(1, -1)
        .split(",")
        .map((str) => "'" + str + "'")
        .join(" | ") ?? "unknown"
    );
  }
  return "string";
}

function buildTypesForComponent(mjmlComponent: IMjmlComponent): string {
  const {
    componentName,
    allowedAttributes,
    defaultAttributes,
    endingTag: isEndingTag,
  } = mjmlComponent;
  const typesFromMjmlAttributes: Record<string, string> = {};
  if (allowedAttributes) {
    Object.entries(allowedAttributes).forEach(
      ([mjmlAttribute, mjmlAttributeType]) => {
        const attribute = camelCase(mjmlAttribute);
        typesFromMjmlAttributes[attribute] = getPropTypeFromMjmlAttributeType(
          attribute,
          mjmlAttributeType
        );
      }
    );
  }

  if (HAS_CSS_CLASS.has(componentName)) {
    typesFromMjmlAttributes["className"] = "string";
    typesFromMjmlAttributes["cssClass"] = "string";
    typesFromMjmlAttributes["mjmlClass"] = "string";
  }
  if (HAS_CHILDREN.has(componentName)) {
    typesFromMjmlAttributes["children"] = "React.ReactNode";
  }
  if (isEndingTag) {
    typesFromMjmlAttributes["dangerouslySetInnerHTML"] = "{ __html: string }";
  }
  const typeOverride = TYPE_OVERRIDE[componentName];
  if (typeOverride !== undefined) {
    for (const [prop, type] of Object.entries(typeOverride)) {
      typesFromMjmlAttributes[prop] = type;
    }
  }

  const typeStrings = Object.entries(typesFromMjmlAttributes).map(
    ([attributes, type]) => {
      const definition = `${attributes}?: ${type}`;
      const defaultValue =
        defaultAttributes && attributes in defaultAttributes
          ? defaultAttributes[attributes]
          : undefined;
      return defaultValue
        ? `/** MJML default value: ${defaultValue} */\n${definition}`
        : definition;
    }
  );

  // allow any property
  if (ALLOW_ANY_PROPERTY.has(componentName)) {
    typeStrings.push("[prop: string]: string | undefined;");
  }

  return typeStrings.join("\n");
}

function buildFileContents({
  componentName,
  types,
  reactName,
}: {
  componentName: string;
  types: string;
  reactName: string;
}) {
  const { props, createElementProps } =
    buildReactCreateElementProps(componentName);
  const unitsUsed = ["Matrix", ...Object.keys(typeToUnit)]
    .filter((unit) => types.includes(unit))
    .join(", ");
  const unitsImports = unitsUsed ? ", " + unitsUsed : "";

  return `
${GENERATED_HEADER_TSX}

import React from "react";

import { convertPropsToMjmlAttributes${unitsImports} } from "../${UTILS_FILE}";

export interface I${reactName}Props {
  ${types}
}

export function ${reactName}(${props}: I${reactName}Props): JSX.Element {
  return React.createElement("${componentName}", ${createElementProps});
};
`;
}

function buildReactCreateElementProps(componentName: string): {
  props: string;
  createElementProps: string;
} {
  const withChildren = "{children, ...props}";
  const withoutChildren = "props";

  if (componentName === "mj-style") {
    return {
      props: withChildren,
      createElementProps:
        "{ ...convertPropsToMjmlAttributes(props), dangerouslySetInnerHTML: { __html: props.dangerouslySetInnerHTML ? props.dangerouslySetInnerHTML.__html : children } }",
    };
  }
  if (HAS_CHILDREN.has(componentName)) {
    return {
      props: withChildren,
      createElementProps: "convertPropsToMjmlAttributes(props), children",
    };
  }
  return {
    props: withoutChildren,
    createElementProps: "convertPropsToMjmlAttributes(props)",
  };
}

// reset directory
const GENERATED_MJML_FILES = path.join(MJML_REACT_DIR, MJML_COMPONENTS_FOLDER);
del.sync(GENERATED_MJML_FILES);
fs.mkdirSync(GENERATED_MJML_FILES);

// create mjml-react components
for (const mjmlComponent of MJML_COMPONENTS_TO_GENERATE) {
  const { componentName } = mjmlComponent;
  const mjmlPackageName = componentName.replace("mj-", "mjml-");
  const reactName = upperFirst(camelCase(mjmlPackageName));

  const types = buildTypesForComponent(mjmlComponent);
  const fileContents = buildFileContents({ componentName, reactName, types });

  fs.writeFileSync(
    path.join(GENERATED_MJML_FILES, `${reactName}.tsx`),
    fileContents
  );
}

// create index export file for mjml-react components
const MJML_INDEX_FILE = path.join(GENERATED_MJML_FILES, `index.tsx`);
fs.writeFileSync(
  MJML_INDEX_FILE,
  `
${GENERATED_HEADER_TSX}

${MJML_COMPONENTS_TO_GENERATE.map(({ componentName }) => {
  const mjmlPackageName = componentName.replace("mj-", "mjml-");
  const reactName = upperFirst(camelCase(mjmlPackageName));
  return `export { ${reactName} } from './${reactName}';
export type { I${reactName}Props } from './${reactName}';`;
}).join("\n")}
`
);

// create index export for main mjml-react package export
const MAIN_INDEX_FILE = path.join(MJML_REACT_DIR, `index.tsx`);
fs.writeFileSync(
  MAIN_INDEX_FILE,
  `
${GENERATED_HEADER_TSX}

export * from "./${UTILS_FILE}";
export * from "./${MJML_COMPONENTS_FOLDER}";
`
);

// generate gitattributes file
const gitAttributes = MJML_COMPONENTS_TO_GENERATE.map(({ componentName }) => {
  const mjmlPackageName = componentName.replace("mj-", "mjml-");
  const reactName = upperFirst(camelCase(mjmlPackageName));
  return `${reactName}.tsx  linguist-generated`;
}).join("\n");

const gitAttributesFile = path.join(MJML_REACT_DIR, ".gitattributes");
fs.writeFileSync(
  gitAttributesFile,
  `# AUTOGENERATED, DO NOT EDIT.
.gitAttributes linguist-generated
${gitAttributes}
`
);

require("child_process").execSync(
  `yarn prettier --write ${GENERATED_MJML_FILES} ${MJML_INDEX_FILE} ${MAIN_INDEX_FILE}`
);
