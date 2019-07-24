import booleanFun, { booleanRule } from "./boolean";
import domParseFun, { domParserRule } from "./domParser";

import iterableFun, { iterableRule } from "./iterable";
import iterableFunFun, { iterableFunRule } from "./iterableFun";
import jsonPathFun, { jsonPathRule } from "./jsonPath";
import mapKeyFun, { mapKeyRule } from "./mapKey";
import mapObjectFun, { mapObjectRule } from "./mapObject";
import matchFun, { matchFunRule } from "./match";
import replaceFun, { replaceRule } from "./replace";
import toStringFun, { toStringRule } from "./toString";
import xpathFun, { xpathRule } from "./xpath";

import Timer from "../util/timer";

export interface Rule {
  fun: FunName;
  arg?:
    | booleanRule
    | domParserRule
    | iterableFunRule
    | jsonPathRule
    | mapObjectRule
    | replaceRule
    | toStringRule
    | xpathRule
    | matchFunRule
    | iterableRule
    | mapKeyRule
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
  | "mapObject";

function resolveFun(data: any, rule: Rule) {
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
  }
}

const timer = new Timer({ logger: true });

export default (data: any, rules: any) => {
  let param = data;

  for (let rule of rules) {
    timer.start();

    param = resolveFun(param, rule);

    timer.end(rule.fun);
  }

  return param;
};
