import { ESLintUtils } from "@typescript-eslint/utils";
import { RuleContext } from "@typescript-eslint/utils/ts-eslint";

interface RuleListeners {
  template?: object;
  script?: ESLintUtils.RuleListener;
}

export const withTemplateVisitor = <C extends RuleContext<any, []>>(
  context: C,
  { template, script }: RuleListeners
) => {
  const templateBodyVisitor = (context.sourceCode.parserServices as any)
    ?.defineTemplateBodyVisitor;
  const isVueParser = !!templateBodyVisitor;

  if (isVueParser) {
    return templateBodyVisitor(template ?? {}, script);
  }
  return script ?? {};
};
