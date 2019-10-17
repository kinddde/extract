/**
 *  matchFun 规则
 *  @rule 正则表达式  ''.match
 */
export type matchFunRule = string;

function matchFun(source: string, rule: matchFunRule): any {
  let reg = new RegExp(rule);
  return source.match(reg);
}

export default matchFun;
