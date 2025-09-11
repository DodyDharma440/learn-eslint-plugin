import { createRule } from "../utils/rule";

export const noInlineType = createRule({
  name: "no-inline-type",
  meta: {
    docs: {
      description: "Detect if is there any inline type parameter definition",
    },
    type: "suggestion",
    messages: {
      "issue:inline-type": "Prefer do not use inline type definition",
    },
    schema: [],
  },
  defaultOptions: [],
  create: (context) => {
    return {
      CallExpression(node) {
        if (node.typeArguments?.type === "TSTypeParameterInstantiation") {
          const hasInlineType = node.typeArguments.params.some(
            (p) => p.type === "TSTypeLiteral"
          );

          if (hasInlineType) {
            context.report({
              node,
              messageId: "issue:inline-type",
            });
          }
        }
      },
    };
  },
});
