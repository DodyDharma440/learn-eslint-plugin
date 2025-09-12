import { defineConfig } from "eslint/config";
import testConfig from "@dodidharma/eslint-config-test/flat";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([
  {
    ...testConfig,
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaFeatures: {
          jsx: false,
        },
      },
    },
  },
]);
