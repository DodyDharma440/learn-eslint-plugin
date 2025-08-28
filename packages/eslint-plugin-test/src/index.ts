import { ESLint } from "eslint";
import { rules } from "./rules";
import { RuleModule } from "@typescript-eslint/utils/ts-eslint";

type RuleKey = keyof typeof rules;

interface Plugin extends Omit<ESLint.Plugin, "rules"> {
  rules: Record<RuleKey, RuleModule<any, any, any>>;
}

const plugin: Plugin = {
  meta: {
    name: "eslint-plugin-test",
    version: "0.0.1",
  },
  rules,
};

export = plugin;
