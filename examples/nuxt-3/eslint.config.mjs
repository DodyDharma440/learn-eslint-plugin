// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import testConfig from "eslint-config-test/flat";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";

export default withNuxt({
  ...testConfig,
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: tsParser,
      ecmaFeatures: { jsx: false },
    },
  },
});
