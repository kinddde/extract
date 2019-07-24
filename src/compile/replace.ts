/**
 * 正则表达式替换文本
 * @reg    正则表达式、字符串
 * @target  目标字符串
 */
export interface replaceRule {
  reg: string;
  target?: string;
}

function replaceFun(source: string, rule: replaceRule): string {
  let reg = new RegExp(rule.reg);
  return source.replace(reg, rule.target || "");
}

export default replaceFun;
