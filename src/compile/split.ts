/**
 *  splitFun 规则
 *  @rule 分割字符串
 */
export type splitFunRule = string;

function splitFun(source: string, rule: splitFunRule): any {
  return source.split(rule);
}

export default splitFun;
