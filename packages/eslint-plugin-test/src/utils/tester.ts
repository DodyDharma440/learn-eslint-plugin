import { RuleTester, RuleTesterConfig } from "@typescript-eslint/rule-tester";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";

export const createVueTester = (config?: RuleTesterConfig) => {
  return new RuleTester({
    ...config,
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaFeatures: {
          jsx: false,
        },
      },
      ...config?.languageOptions,
    },
  });
};
