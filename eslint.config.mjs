import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import jestPlugin from "eslint-plugin-jest";
import jestDomPlugin from "eslint-plugin-jest-dom";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    name: "global ignores",
    ignores: ["dist"],
  },
  {
    files: [`**/*.{js,cjs,mjs,ts,tsx,mts}`],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactHooksPlugin.configs.flat.recommended,
  {
    plugins: {
      import: importPlugin,
    },
  },
  {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig-eslint.json"],
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    rules: {
      complexity: "error",
      curly: "error",
      eqeqeq: ["error", "smart"],
      "no-alert": "error",
      "no-console": "error",
      "no-prototype-builtins": "off",
      "no-unused-vars": "off",
      "no-process-env": "error",

      /* typescript-eslint rules */
      "@typescript-eslint/adjacent-overload-signatures": "off",
      "@typescript-eslint/no-restricted-types": [
        "error",
        {
          types: {
            IStringTMap: "Prefer Record<string, T>",
          },
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          accessibility: "no-public",
          overrides: { parameterProperties: "explicit" },
        },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/only-throw-error": "error",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
          enforceForJSX: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-var-requires": "off",

      /* react rules */
      "react/display-name": "off",
      "react/jsx-curly-brace-presence": ["error", { props: "never" }],
      "react/no-deprecated": "warn",
      "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
      "react/prop-types": "off",
      "react/no-danger": "error",
      "react/self-closing-comp": "error",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
        },
      ],

      /* import rules */
      "import/no-unassigned-import": "error",
      "import/order": "off", // Use prettier for import order formatting
    },
  },
  {
    files: ["**/?(*.)+(test).ts?(x)"],
    extends: [
      jestPlugin.configs["flat/recommended"],
      jestPlugin.configs["flat/style"],
    ],
    rules: {
      "jest/expect-expect": [
        "warn",
        {
          assertFunctionNames: ["expect*"],
          additionalTestBlockFunctions: [],
        },
      ],
      "jest/no-standalone-expect": [
        "error",
        { additionalTestBlockFunctions: ["afterEach"] },
      ],
    },
  },
  {
    files: ["test/**/*"],
    languageOptions: {
      globals: jestPlugin.environments.globals.globals,
    },
    rules: {
      "no-undef": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "react/jsx-curly-brace-presence": "off",
    },
  },
  {
    files: ["**/?(*.)+(test).tsx"],
    extends: [jestDomPlugin.configs["flat/recommended"]],
  },
  {
    files: ["src/mjml/*"],
    rules: {
      "react/function-component-definition": "off",
    },
  },
]);
