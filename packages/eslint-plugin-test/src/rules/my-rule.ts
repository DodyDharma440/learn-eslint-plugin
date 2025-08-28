import { ESLintUtils } from "@typescript-eslint/utils";

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
    return {
      VariableDeclaration: (node) => {
        if (node.kind === "var") {
          const rangeStart = node.range[0];
          const range: readonly [number, number] = [
            rangeStart,
            rangeStart + 3 /* 'var'.length */,
          ];
          console.log("🚀 ~ range:", range);

          context.report({
            node,
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
    };
  },
});
