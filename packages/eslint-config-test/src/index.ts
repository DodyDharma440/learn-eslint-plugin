import { ESLint } from "eslint";

const eslintConfig: ESLint.ConfigData = {
  plugins: ["test"],
  rules: {
    "no-unused-vars": "warn",
    "no-use-before-define": "error",
  },
  extends: ["plugin:test/recommended"],
  overrides: [
    {
      files: ["*.ts"],
    },
  ],
};

export = eslintConfig;
