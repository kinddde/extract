/**
 *  splitFun 规则
 *  @rule 正则表达式  ''.match
 */
export type splitFunRule = string;

function splitFun(source: string, rule: splitFunRule): any {
  return source.split(rule);
}

export default splitFun;
