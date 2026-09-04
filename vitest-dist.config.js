import path from "path";
import { defineConfig, mergeConfig } from "vitest/config";

import vitestConfig from "./vitest.config.js";

export default mergeConfig(
  vitestConfig,
  defineConfig({
    resolve: {
      alias: {
        "../src": path.resolve(import.meta.dirname, "./dist"),
      },
    },
  })
);
