import { RuleTester } from "@typescript-eslint/rule-tester";
import { noInlineType } from "../rules/no-inline-type";

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
  },
});

ruleTester.run("eslint-plugin/no-inline-type", noInlineType, {
  valid: [{ code: "example<SomeType>();" }, { code: "example<string>();" }],
  invalid: [
    {
      code: "example<{ message: string }>();",
      errors: [
        {
          messageId: "issue:inline-type",
        },
      ],
    },
  ],
});
