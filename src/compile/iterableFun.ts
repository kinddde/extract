import mapObject, { MapObjectRule } from "./mapObject";

import { Rule } from "./funs";

/**
 * mapFun 规则
 *
 * 数据源是数组， 遍历执行mapObject
 */
export interface IterableFunRule extends MapObjectRule {
  $$$$: Rule[];
  [propName: string]: Rule[];
}

/**
 *
 *
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
export default (source: any[], rule: any): any[] => {
  return source.map((item: any) => {
    return mapObject(item, rule);
  });
};
