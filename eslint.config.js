// https://typescript-eslint.io/getting-started

// @ts-check

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
          allowDefaultProject: ["*.js"],
        },
      },
    },
  },
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    plugins: {
      testingLibrary,
    },
  }
);
