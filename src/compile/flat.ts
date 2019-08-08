/**
 *  flatFun 规则
 *  @rule 展开数据  [].flat(arg)
 */
export type flatFunRule = string;

export default (source: any[], rule: string = "1"): any[] => {
  return source.flat(Number(rule));
};
