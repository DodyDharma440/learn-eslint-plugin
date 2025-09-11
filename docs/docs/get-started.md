---
sidebar_position: 1
---

# Get Started

Let's discover **Docusaurus in less than 5 minutes**.

## Quick Start

Make sure ESLint module in your Nuxt.js is already added.

### Install the package

```
npm install -D eslint-plugin-test eslint-config-test

//or

yarn add -D eslint-plugin-test eslint-config-test
```

### Import configuration

```
// eslint.config.mjs
...
import testConfig from "eslint-config-test/flat";
...

export default withNuxt({
  ...
  ...testConfig, // add this line
  ...
});
```

Congrats! the ESLint Plugin Test is installed on your Nuxt.js app! We suggest to restart your VSCode ESLint server after add the configuration
