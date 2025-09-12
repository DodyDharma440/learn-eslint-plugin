import { ESLint } from "eslint";
import { myRule } from "./my-rule";
import { noFetchComponent } from "./no-fetch-component";
import { noHrefNuxtLink } from "./no-href-nuxt-link";
import { noInlineType } from "./no-inline-type";
import { preferInterfaceObject } from "./prefer-interface-object";

export const rules = {
  "my-rule": myRule,
  "no-inline-type": noInlineType,
  "prefer-interface-object": preferInterfaceObject,
  "no-fetch-component": noFetchComponent,
  "no-href-nuxt-link": noHrefNuxtLink,
} as unknown as ESLint.Plugin["rules"];
