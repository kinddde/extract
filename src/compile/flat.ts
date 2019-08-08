/**
 *  splitFun 规则
 *  @rule 分割字符串
 */
export type flatFunRule = string;

export default (source: any[], rule: string = "1"): any[] => {
  return source.flat(Number(rule));
};
