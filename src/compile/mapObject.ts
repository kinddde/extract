import { forIn } from "lodash";
import mapFuns from "./funs";

import { Rule } from "./funs";

/**
 * mapObject方法规则
 * 遍历传入的对象， 依次赋值
 *
 * @$$$$ 统一执行的方法
 */
export interface mapObjectRule {
  $$$$: Array<Rule>;
  [propName: string]: any;
}

export default (data: any, rule: object) => {
  let $obj: any = {};
  forIn(rule, (value: any, key: string) => {
    if (key === "$$$$") {
      data = mapFuns(data, value);
    } else {
      $obj[key] = mapFuns(data, value);
    }
  });

  return $obj;
};
