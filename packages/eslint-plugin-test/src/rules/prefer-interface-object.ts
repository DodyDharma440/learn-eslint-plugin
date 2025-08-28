import { ESLintUtils } from "@typescript-eslint/utils";

export const createRule = ESLintUtils.RuleCreator(
  () => `https://my-docs.com/prefer-interface-object`
);

export const preferInterfaceObject = createRule({
  name: "prefer-interface-object",
  meta: {
    docs: {
      description: "Avoid using type when the types is an object literal",
    },
    type: "suggestion",
    messages: {
      "issues:prefer-interface":
        "Change `type` to `interface` if your type definition is an object literal",
    },
    schema: [],
  },
  defaultOptions: [],
  create: (context) => {
    return {
      TSTypeAliasDeclaration(node) {
        if (node.typeAnnotation.type === "TSTypeLiteral") {
          context.report({
            node,
            messageId: "issues:prefer-interface",
          });
        }

        if (node.typeAnnotation.type === "TSIntersectionType") {
          node.typeAnnotation.types.forEach((t) => {
            if (t.type === "TSTypeLiteral") {
              context.report({
                node,
                messageId: "issues:prefer-interface",
              });
            }
          });
        }
      },
    };
  },
});
