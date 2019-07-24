import mapObject from "./mapObject";

import { mapObjectRule } from "./mapObject";

/**
 * mapFun 规则
 *
 * 数据源是数组， 遍历执行mapObject
 */
export interface iterableFunRule extends mapObjectRule {}

/**
 *
 *
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
export default (source: Array<any>, rule: any): Array<any> => {
  return source.map((item: any) => {
    return mapObject(item, rule);
  });
};
