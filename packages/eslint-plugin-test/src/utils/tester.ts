import { RuleTester, RuleTesterConfig } from "@typescript-eslint/rule-tester";

export const createVueTester = (config?: RuleTesterConfig) => {
  return new RuleTester({
    parser: "vue-eslint-parser",
    parserOptions: {
      parser: "@typescript-eslint/parser",
      ecmaFeatures: {
        jsx: false,
      },
    },
    ...config,
  });
};
