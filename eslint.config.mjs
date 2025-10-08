// https://typescript-eslint.io/getting-started

import { defineConfig } from "eslint/config";

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

import prettierConfig from "eslint-config-prettier";

import testingLibrary from "eslint-plugin-testing-library";

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,

  prettierConfig,

  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.config.js", "*.config.mjs"],
          defaultProject: "tsconfig.json",
        },
      },
      rules: {
        "@typescript-eslint/no-require-imports": {
          allowAsImport: true,
        },
      },
      sourceType: "commonjs",
    },
  },
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    plugins: {
      testingLibrary,
    },
  }
);
