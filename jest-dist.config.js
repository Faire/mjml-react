/** @type {import('ts-jest').JestConfigWithTsJest} */

const baseConfig = require("./jest.config");

module.exports = {
  ...baseConfig,
  moduleNameMapper: {
    "src(.*)$": "<rootDir>/dist/src$1",
  },
};
