import { value } from "jsonpath";

/**
 * jsonPath 规则
 * @xpath  解析规则 文档:https://github.com/dchester/jsonpath
 */
export type jsonPathRule = string;

export default (source: any, xpath: jsonPathRule): any => {
  return value(source, xpath);
};
