import { ESLintUtils, TSESTree } from "@typescript-eslint/utils";
import { AST } from "vue-eslint-parser";

export const createRule = ESLintUtils.RuleCreator(() => `https://google.com`);

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
    return (
      context.sourceCode.parserServices as any
    )?.defineTemplateBodyVisitor(
      // Event handlers for <template>.
      {
        VElement(): void {
          //...
        },
      },
      // Event handlers for <script> or scripts. (optional)
      {
        VariableDeclaration: (node: AST.ESLintVariableDeclaration) => {
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
      }
    );
  },
});
