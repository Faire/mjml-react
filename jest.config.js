/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.js?$": "ts-jest",
    "^.+\\.ts?$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/"],
};
