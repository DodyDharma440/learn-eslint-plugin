import { ESLint, Linter } from "eslint";
import { rules } from "./rules";

type Plugin = Omit<ESLint.Plugin, "configs"> & {
  configs: ESLint.Plugin["configs"] & {
    recommended: Linter.Config;
  };
};

const plugin: Plugin = {
  meta: {
    name: "eslint-plugin-test",
    version: "0.0.1",
  },
  rules,
  configs: {
    recommended: {
      rules: {
        "test/my-rule": "error",
        "test/no-inline-type": "error",
        "test/prefer-interface-object": "warn",
        "test/no-fetch-component": "error",
        "test/no-href-nuxt-link": "warn",
      },
    },
  },
};

export = plugin;
