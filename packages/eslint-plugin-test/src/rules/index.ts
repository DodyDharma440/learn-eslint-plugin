import { myRule } from "./my-rule";
import { noFetchComponent } from "./no-fetch-component";
import { noInlineType } from "./no-inline-type";
import { preferInterfaceObject } from "./prefer-interface-object";

export const rules = {
  "my-rule": myRule,
  "no-inline-type": noInlineType,
  "prefer-interface-object": preferInterfaceObject,
  "no-fetch-component": noFetchComponent,
};
