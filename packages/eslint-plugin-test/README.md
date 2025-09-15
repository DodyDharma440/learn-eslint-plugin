# ESLint Plugin Test

This package is not for unit tests, but the name is test is just to test how to create eslint plugin package 😁
This ESLint Plugin is designed special for vue.js

## Installation

```bash
yarn add -D @dodidharma/eslint-plugin-test
```

## Usage

### ESLint 8 (Classic)

In eslintrc

```js
module.exports = {
  plugins: ["@dodidharma/test"],
  extends: ["plugin:@dodidharma/test/recommended"],
  overrides: [
    {
      files: ["*.ts", "*.vue"],
    },
  ],
};
```

### ESLint 9 (Flat Config)

eslint.config.(js,ts,mjs)

```ts
import { defineConfig } from "eslint";

export default defineConfig([
  {
    files: ["**/*.ts", "**/*.vue"],
    plugins: {
      "@dodidharma/test": pluginTest,
    },
    ...pluginTest.configs.recommended,
    rules: {
      // your other rules
      ...pluginTest.configs.recommended.rules,
    },
  },
]);
```
