import { TSESTree } from "@typescript-eslint/utils";
import { createRule, withTemplateVisitor } from "../utils/rule";

export const noFetchComponent = createRule({
  name: "no-fetch-component",
  meta: {
    docs: {
      description: "Avoid call $fetch directly on component",
    },
    type: "suggestion",
    messages: {
      "issue:no-fetch": "Avoid call $fetch directly on component",
    },
    schema: [],
  },
  defaultOptions: [],
  create: (context) => {
    const filename = context.filename;

    if (!filename.endsWith(".vue")) {
      return {};
    }

    return withTemplateVisitor(context, {
      script: {
        CallExpression(node) {
          if (
            node.callee.type === "Identifier" &&
            node.callee.name === "$fetch"
          ) {
            context.report({
              node: node as TSESTree.Node,
              messageId: "issue:no-fetch",
            });
          }
        },
      },
    });
  },
});
