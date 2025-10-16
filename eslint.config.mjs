import { defineConfig, globalIgnores } from "eslint/config";

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

import expoConfig from "eslint-config-expo/flat.js";
import prettierConfig from "eslint-config-prettier";

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked, // eslint-disable-line import/no-named-as-default-member

  expoConfig,
  prettierConfig,

  globalIgnores(["*.config.js"]),

  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },

      ecmaVersion: "latest",
      sourceType: "module",
    },
  }
);
