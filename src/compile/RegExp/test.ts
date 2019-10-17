/**
 * 正则表达式 test
 * @arg    正则表达式、字符串

 */
export type regExpTestRule = string;

function regExpTestFun(source: string, rule: regExpTestRule): boolean {
  let reg = new RegExp(rule, "g");
  return reg.test(source);
}

export default regExpTestFun;
