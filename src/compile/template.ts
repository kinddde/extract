import { template } from "lodash";

/**
 *  templateFun 规则
 *  @rule template 模板字符串  数据data
 */
export type templateFunRule = string;

export default (source: string, rule: string) => {
  return template(rule)({ data: source });
};
