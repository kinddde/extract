import booleanFun, { booleanRule } from "./boolean";
import domParseFun, { domParserRule } from "./domParser";
import filterEmptyStringFun, {
  filterEmptyStringRule
} from "./filterEmptyString";
import iterableFun, { IterableRule } from "./iterable";
import iterableFunFun, { IterableFunRule } from "./iterableFun";
import jsonPathFun, { jsonPathRule } from "./jsonPath";
import mapKeyFun, { MapKeyRule } from "./mapKey";
import mapObjectFun, { MapObjectRule } from "./mapObject";

import matchFun, { matchFunRule } from "./RegExp/match";
import replaceFun, { ReplaceRule } from "./RegExp/replace";
import regExpTestFun, { regExpTestRule } from "./RegExp/test";

import toStringFun, { toStringRule } from "./toString";
import trimFun, { trimRule } from "./trim";
import xpathFun, { xpathRule } from "./xpath";

import assignFun, { assignRule } from "./assign";

import splitFun, { splitFunRule } from "./split";

import templateFun, { templateFunRule } from "./template";

import flatFun, { flatFunRule } from "./flat";

import objectToArrayFun, { objectToArrayFunRule } from "./objectToArray";

import atob, { atobRule } from "./atob";

export interface Rule {
  fun: FunName;
  arg?:
    | booleanRule
    | domParserRule
    | IterableFunRule
    | jsonPathRule
    | MapObjectRule
    | ReplaceRule
    | toStringRule
    | xpathRule
    | matchFunRule
    | IterableRule
    | MapKeyRule
    | trimRule
    | filterEmptyStringRule
    | assignRule
    | splitFunRule
    | templateFunRule
    | flatFunRule
    | objectToArrayFunRule
    | regExpTestRule
    | atobRule
    | any;
}

export type FunName =
  | "boolean"
  | "jsonPath"
  | "mapKey"
  | "iterable"
  | "toString"
  | "xpath"
  | "domParse"
  | "iterableFun"
  | "match"
  | "replace"
  | "mapObject"
  | "trim"
  | "filterEmptyString"
  | "assign"
  | "split"
  | "template"
  | "flat"
  | "objectToArray"
  | "regExpTest"
  | "atob";

function resolveFun(data: any, rule: Rule): any {
  const { fun, arg } = rule;
  switch (fun) {
    case "boolean":
      return booleanFun(data, arg);

    case "jsonPath":
      return jsonPathFun(data, arg);

    case "mapKey":
      return mapKeyFun(data, arg);

    case "iterable":
      return iterableFun(data, arg);

    case "toString":
      return toStringFun(data);
    case "xpath":
      return xpathFun(data, arg);
    case "domParse":
      return domParseFun(data);
    case "iterableFun":
      return iterableFunFun(data, arg);
    case "match":
      return matchFun(data, arg);
    case "replace":
      return replaceFun(data, arg);
    case "mapObject":
      return mapObjectFun(data, arg);
    case "trim":
      return trimFun(data);
    case "filterEmptyString":
      return filterEmptyStringFun(data);

    case "assign":
      return assignFun(arg);
    case "split":
      return splitFun(data, arg);
    case "template":
      return templateFun(data, arg);

    case "flat":
      return flatFun(data, arg);
    case "objectToArray":
      return objectToArrayFun(data);

    case "regExpTest":
      return regExpTestFun(data, arg);

    case "atob":
      return atob(data);

    default:
      return data;
  }
}

export default (data: any, rules: any) => {
  let param = data;

  for (const rule of rules) {
    param = resolveFun(param, rule);
  }

  return param;
};
