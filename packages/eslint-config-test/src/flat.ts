import { Linter } from "eslint";
import pluginTest from "eslint-plugin-test";

const eslintConfig: Linter.Config = {
  files: ["**/*.ts", "**/*.vue"],
  plugins: {
    test: pluginTest,
  },
  rules: {
    "no-unused-vars": "warn",
    "no-use-before-define": "error",
  },
  ...pluginTest.configs.recommended,
};

export = eslintConfig;
