import { RuleTester } from "@typescript-eslint/rule-tester";
import { preferInterfaceObject } from "../rules/prefer-interface-object";

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
  },
});

ruleTester.run("eslint-plugin/prefer-interface-object", preferInterfaceObject, {
  valid: [
    "interface SomeInterface {};",
    "type SomeType = 'foo' | 'bar';",
    "type SomeType = Extended;",
    "type SomeType = Extended & OtherExtend;",
  ],
  invalid: [
    {
      code: `type SomeType = {}`,
      errors: [{ messageId: "issues:prefer-interface" }],
    },
    {
      code: `type SomeType = {
        foo: "bar";
      }`,
      errors: [{ messageId: "issues:prefer-interface" }],
    },
    {
      code: `type SomeType = Extended & { 
        hello: 'world';
      };`,
      errors: [{ messageId: "issues:prefer-interface" }],
    },
  ],
});
