# ESLint Config Test

This package is not for unit tests, but the name is test is just to test how to create eslint config package 😁
This ESLint Config is designed special for vue.js

## Installation

```bash
yarn add -D @dodidharma/eslint-config-test
```

## Usage

### ESLint 8 (Classic)

In eslintrc

```js
module.exports = {
  extends: "@dodidharma/test",
  parser: "vue-eslint-parser",
  plugins: ["vue"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaFeatures: {
      jsx: false,
    },
  },
};
```

### ESLint 9 (Flat Config)

eslint.config.(js,ts,mjs)

```ts
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
```
