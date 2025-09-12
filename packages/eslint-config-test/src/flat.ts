import { Linter } from "eslint";
import pluginTest from "@dodidharma/eslint-plugin-test";

const eslintConfig: Linter.Config = {
  files: ["**/*.ts", "**/*.vue"],
  plugins: {
    "@dodidharma/test": pluginTest,
  },
  ...pluginTest.configs.recommended,
  rules: {
    "no-unused-vars": "warn",
    "no-use-before-define": "error",
    ...pluginTest.configs.recommended.rules,
  },
};

export = eslintConfig;
