import { ESLint } from "eslint";

const eslintConfig: ESLint.ConfigData = {
  plugins: ["@dodidharma/test"],
  rules: {
    "no-unused-vars": "warn",
    "no-use-before-define": "error",
  },
  extends: ["plugin:@dodidharma/test/recommended"],
  overrides: [
    {
      files: ["*.ts"],
    },
  ],
};

export = eslintConfig;
