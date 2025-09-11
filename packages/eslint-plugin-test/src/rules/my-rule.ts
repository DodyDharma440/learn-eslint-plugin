import { TSESTree } from "@typescript-eslint/utils";
import { createRule, withTemplateVisitor } from "../utils/rule";

export const myRule = createRule({
  name: "my-rule",
  meta: {
    docs: {
      description: "My first custom eslint rule",
    },
    type: "suggestion",
    messages: {
      "issue:var": "Prefer using `let` or `const`",
      "fix:let": "Replace this `var` declaration with `let`",
      "fix:const": "Replace this `var` declaration with `const`",
    },
    schema: [],
    hasSuggestions: true,
    fixable: "code",
  },
  defaultOptions: [],
  create: (context) => {
    return withTemplateVisitor(context, {
      script: {
        VariableDeclaration: (node) => {
          if (node.kind === "var") {
            const rangeStart = node.range[0];
            const range: readonly [number, number] = [
              rangeStart,
              rangeStart + 3 /* 'var'.length */,
            ];

            context.report({
              node: node as TSESTree.Node,
              messageId: "issue:var",
              fix: (fixer) => fixer.replaceTextRange(range, "const"),
              suggest: [
                {
                  messageId: "fix:let",
                  fix: (fixer) => fixer.replaceTextRange(range, "let"),
                },
                {
                  messageId: "fix:const",
                  fix: (fixer) => fixer.replaceTextRange(range, "const"),
                },
              ],
            });
          }
        },
      },
    });
  },
});
