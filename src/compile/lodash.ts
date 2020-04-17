import _ from "lodash";

/**
 *  trim 规则
 * @source  字符串  trim
 */
export interface LodashFunRule {
  fun: string;
  arg?: any;
}

export default (source: any, data: LodashFunRule) => {
  const { fun, arg } = data;
  // @ts-ignore：
  if (!_[fun]) {
    throw new Error(`${fun} is not lodash function`);
  }
  // @ts-ignore：
  return _[fun](source, arg);
};
