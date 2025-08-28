import { RuleTester } from "@typescript-eslint/rule-tester";
import { myRule } from "../rules/my-rule";

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});

ruleTester.run("eslint-plugin/my-rule", myRule, {
  valid: [{ code: `const x = 5;` }, { code: `let x = "hello";` }],
  invalid: [
    {
      code: `var z = 'foo'`,
      output: `const z = 'foo'`,
      errors: [
        {
          messageId: "issue:var",
          suggestions: [
            {
              messageId: "fix:let",
              output: `let z = 'foo'`,
            },
            {
              messageId: "fix:const",
              output: `const z = 'foo'`,
            },
          ],
        },
      ],
    },
  ],
});
