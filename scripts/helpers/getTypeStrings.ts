import { readFileSync } from "fs";
import chunk from "lodash.chunk";
import kebabcase from "lodash.kebabcase";
import { marked } from "marked";

const NUM_COLUMNS_MJML_DOCS = 4;

export function getTypeStrings(
  componentName: string,
  typesFromMjmlAttributes: Record<string, string>,
  defaultAttributes: Record<string, string> | undefined
): Array<string> {
  let typeStrings: Array<string>;

  const markdownFile = getMarkdownFile(componentName);

  // Currently skip the table element. The regex matcher breaks
  // because there are td tags in the example code
  if (markdownFile && !componentName.includes("table")) {
    const parsedMarkdownFile = marked(markdownFile);
    const documentationValues = chunk(
      parsedMarkdownFile.match(/(?<=<td>)(.*)(?=<\/td>)/g),
      NUM_COLUMNS_MJML_DOCS
    );

    typeStrings = Object.entries(typesFromMjmlAttributes).map(
      ([attributes, type]) => {
        const definition = `${attributes}?: ${type}`;
        const matchedDocumentationArray = documentationValues.find(
          (documentationValue) => {
            return documentationValue.includes(kebabcase(attributes));
          }
        );
        const description = matchedDocumentationArray?.[2];
        const defaultValue =
          defaultAttributes && attributes in defaultAttributes
            ? `MJML default value: ${defaultAttributes[attributes]}`
            : undefined;

        let documentationString = "";
        if (defaultValue && description) {
          documentationString = `/** ${description}\n * ${defaultValue} */\n`;
        } else if (defaultValue || description) {
          documentationString = `/** ${defaultValue ?? description} */\n`;
        }

        return `${documentationString}${definition}`;
      }
    );
  } else {
    typeStrings = Object.entries(typesFromMjmlAttributes).map(
      ([attributes, type]) => `${attributes}?: ${type}`
    );
  }

  return typeStrings;
}

function getMarkdownFile(componentName: string): string | undefined {
  let markdownFile: string | undefined;
  const mjmlFolderName = componentName.replace("mj-", "mjml-");
  try {
    markdownFile = readFileSync(
      `node_modules/${mjmlFolderName}/README.md`,
      "utf-8"
    );

    return markdownFile;
  } catch {
    // If we can't find the folder, we can cut to only take the first two words
    // E.g. For mjml-accordion-element we can cut off the element and just look for
    // mjml-accordion. This is because some components are nested in the same package
    const backupFolderName = mjmlFolderName.split("-").slice(0, 2).join("-");
    try {
      markdownFile = readFileSync(
        `node_modules/${backupFolderName}/README.md`,
        "utf-8"
      );
      return markdownFile;
    } catch {
      return markdownFile;
    }
  }
}
