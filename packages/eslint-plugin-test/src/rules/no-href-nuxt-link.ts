import { ESLintUtils } from "@typescript-eslint/utils";
import { AST } from "vue-eslint-parser";
import { withTemplateVisitor } from "../utils/rule";

export const createRule = ESLintUtils.RuleCreator(
  () => `https://my-docs.com/no-href-nuxt-link`
);

export const noHrefNuxtLink = createRule({
  name: "no-href-nuxt-link",
  meta: {
    docs: {
      description: "Don't use href in nuxt link component",
    },
    type: "suggestion",
    messages: {
      "issue:no-href": "Don't use href in nuxt link component",
    },
    schema: [],
    fixable: "code",
  },
  defaultOptions: [],
  create: (context) => {
    return withTemplateVisitor(context, {
      template: {
        VElement(node: AST.VElement) {
          if (["NuxtLink", "nuxt-link"].includes(node.rawName)) {
            const hrefAttr = node.startTag.attributes.find((attribute) => {
              const attr = attribute as AST.VAttribute;
              const directive = attribute as AST.VDirective;

              return (
                attr.key.rawName === "href" ||
                (directive.key.argument?.type === "VIdentifier" &&
                  directive.key.argument.rawName === "href")
              );
            });

            if (hrefAttr) {
              const range = hrefAttr.directive
                ? hrefAttr.key.argument?.range ?? hrefAttr.range
                : hrefAttr.key.range;

              context.report({
                node: node as any,
                messageId: "issue:no-href",
                fix: (fixer) => fixer.replaceTextRange(range, "to"),
              });
            }
          }
        },
      },
    });
  },
});
