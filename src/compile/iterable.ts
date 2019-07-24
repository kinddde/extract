import { forIn } from "lodash";

import mapFuns from "./funs";

import { Rule } from "./funs";

/**
 * iterable 规则
 * 数据源 Array<object>
 *
 * 依次遍历传入的对象key值, 并重新赋值
 * @$$$$ 统一执行的方法
 */
export interface iterableRule {
  $$$$: Array<Rule>;
  [propName: string]: any;
}

export default (source: Array<any>, rule: any): Array<any> => {
  return source.map((item: any) => {
    let $obj: any = {};
    forIn(rule, (value: any, key: string) => {
      if (key === "$$$$") {
        $obj = mapFuns(item, value);
      } else {
        $obj[key] = mapFuns(item[key], value);
      }
    });

    return $obj;
  });
};
