/** @type {import('ts-jest').JestConfigWithTsJest} */
import baseConfig from "./jest.config.mjs";

export default {
  ...baseConfig,
  moduleNameMapper: {
    "src(.*)$": "<rootDir>/dist$1",
  },
};
