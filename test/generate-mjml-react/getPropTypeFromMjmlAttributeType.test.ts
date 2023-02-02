// import camelCase from "lodash.camelcase";
import _ from "lodash";

import { IMjmlComponent } from "../../scripts/generate-mjml-react";
import {
  ATTRIBUTES_TO_USE_CSSProperties_WITH,
  getPropTypeFromMjmlAttributeType,
} from "../../scripts/generate-mjml-react-utils/getPropTypeFromMjmlAttributeType";

describe("getPropTypeFromMjmlAttributeType", () => {
  test.each`
    mjmlAttributeType                     | reactType
    ${"boolean"}                          | ${"boolean"}
    ${"color"}                            | ${"string"}
    ${"integer"}                          | ${"number"}
    ${"string"}                           | ${"string"}
    ${"unit(px)"}                         | ${"string | number"}
    ${"unit(px,%)"}                       | ${"string | number"}
    ${"unit(px,%){1,4}"}                  | ${"string | number"}
    ${"unit(px,%,)"}                      | ${"string | number"}
    ${"unit(px,auto)"}                    | ${"string | number"}
    ${"unitWithNegative(px,em)"}          | ${"string | number"}
    ${"enum(file-start)"}                 | ${'"file-start"'}
    ${"enum(auto,fixed)"}                 | ${'"auto" | "fixed"'}
    ${"enum(auto,fixed,initial,inherit)"} | ${'"auto" | "fixed" | "initial" | "inherit"'}
    ${"enum(full-width,false,)"}          | ${'"full-width" | "false" | ""'}
  `(
    "transforms mjmlType: $mjmlAttributeType into React type: $reactType",
    ({ mjmlAttributeType, reactType }) => {
      expect(getPropTypeFromMjmlAttributeType("n/a", mjmlAttributeType)).toBe(
        reactType
      );
    }
  );

  describe("use CSSProperties for useful mjml types", () => {
    const presetCoreComponents: Array<IMjmlComponent> =
      require("mjml-preset-core").components;

    const allMjmlTypesGroupedByAttribute = presetCoreComponents.reduce(
      (map, component) => {
        if (component.allowedAttributes !== undefined) {
          for (const [key, value] of Object.entries(
            component.allowedAttributes
          )) {
            if (map.get(key) === undefined) {
              map.set(key, new Set());
            }
            map.get(key)?.add(value);
          }
        }
        return map;
      },
      new Map<string, Set<string>>()
    );

    const val = _.flatten(
      Array.from(ATTRIBUTES_TO_USE_CSSProperties_WITH).map((attribute) => {
        const allMjmlTypes = allMjmlTypesGroupedByAttribute.get(
          _.kebabCase(attribute)
        );
        if (allMjmlTypes === undefined) {
          // place a debug statement here to view the full allMjmlTypesGroupedByAttribute
          throw Error(`allMjmlTypes must be defined for ${attribute}`);
        }
        return Array.from(allMjmlTypes).map(
          (mjmlType: string) =>
            ({
              mjmlType,
              attribute,
            } as { mjmlType: string; attribute: string })
        );
      })
    );

    test.each(val)(
      "mjml attribute $attribute with type $mjmlType becomes a CSSProperty",
      ({ mjmlType, attribute }) => {
        expect(getPropTypeFromMjmlAttributeType(attribute, mjmlType)).toContain(
          "CSSProperties"
        );
      }
    );

    const cssAttribute = Array.from(ATTRIBUTES_TO_USE_CSSProperties_WITH)[0]!;

    test("CSSProperties preempt 'unit'", () => {
      expect(
        getPropTypeFromMjmlAttributeType(cssAttribute, "unit(px)")
      ).toContain("CSSProperties");
    });
    test("CSSProperties does not preempt 'boolean', 'integer', or 'enum'", () => {
      expect(
        getPropTypeFromMjmlAttributeType(cssAttribute, "boolean")
      ).toContain("boolean");
      expect(
        getPropTypeFromMjmlAttributeType(cssAttribute, "integer")
      ).toContain("number");
      expect(
        getPropTypeFromMjmlAttributeType(cssAttribute, "enum(x,y,z)")
      ).toContain('"x"');
    });
  });
});
