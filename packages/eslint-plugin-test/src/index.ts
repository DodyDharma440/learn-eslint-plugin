import { ESLint, Linter } from "eslint";
import { rules } from "./rules";

type Plugin = Omit<ESLint.Plugin, "configs"> & {
  configs: ESLint.Plugin["configs"] & {
    recommended: Linter.Config;
  };
};

const plugin: Plugin = {
  meta: {
    name: "@dodidharma/eslint-plugin-test",
    version: "0.0.1",
  },
  rules,
  configs: {
    recommended: {
      rules: {
        "@dodidharma/test/my-rule": "error",
        "@dodidharma/test/no-inline-type": "error",
        "@dodidharma/test/prefer-interface-object": "warn",
        "@dodidharma/test/no-fetch-component": "error",
        "@dodidharma/test/no-href-nuxt-link": "warn",
      },
    },
  },
};

export = plugin;
