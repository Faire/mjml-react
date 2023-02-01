export const ATTRIBUTES_TO_USE_CSSProperties_WITH = new Set([
  "color",
  "textDecoration",
  "textTransform",

  "border",
  "borderRadius",
  "borderColor",
  "borderStyle",

  "backgroundColor",
  "backgroundPosition",
  "backgroundSize",
]);

/**
 * Converts an mjml type definition into a typescript type definition
 * Handles boolean, integer, enum, and
 * This is used to generate the types on the React <> mjml binding component.
 */
export function getPropTypeFromMjmlAttributeType(
  attribute: string,
  mjmlAttributeType: string
): string {
  if (mjmlAttributeType === "boolean") {
    return "boolean";
  }
  if (mjmlAttributeType === "integer") {
    return "number";
  }
  // e.g. "vertical-align": "enum(top,bottom,middle)"
  if (mjmlAttributeType.startsWith("enum(")) {
    return transformEnumType(mjmlAttributeType);
  }
  if (ATTRIBUTES_TO_USE_CSSProperties_WITH.has(attribute)) {
    // When possible prefer using the CSSProperties definitions over the
    // less helpful "string" or "string | number" type definitions.
    return `React.CSSProperties["${attribute}"]`;
  }
  if (
    mjmlAttributeType.startsWith("unit") &&
    mjmlAttributeType.includes("px")
  ) {
    return "string | number";
  }
  return "string";
}

/**
 * Converts an mjml enum type definition into a typescript string literal type.
 * Strings like `"enum(a,b,c)"` become `"a" | "b" | "c"`.
 * This is used to generate the types on the React <> mjml binding component.
 */
function transformEnumType(mjmlAttributeType: string): string {
  return (
    mjmlAttributeType
      .match(/\(.*\)/)?.[0]
      ?.slice(1, -1)
      .split(",")
      .map((str) => '"' + str + '"')
      .join(" | ") ?? "unknown"
  );
}
