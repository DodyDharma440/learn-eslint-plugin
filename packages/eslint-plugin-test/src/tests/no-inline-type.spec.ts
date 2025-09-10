import { RuleTester } from "@typescript-eslint/rule-tester";
import { noInlineType } from "../rules/no-inline-type";
import tsParser from "@typescript-eslint/parser";

const ruleTester = new RuleTester({
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaFeatures: {
        jsx: false,
      },
    },
  },
});

ruleTester.run("no-inline-type", noInlineType, {
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
