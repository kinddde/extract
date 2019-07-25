import { forIn } from "lodash";
import mapFuns from "./funs";

import { Rule } from "./funs";

/**
 * mapObject方法规则
 * 遍历传入的对象， 依次赋值
 *
 * @$$$$ 统一执行的方法  如果没有设置其他key, 将返回统一处理后的结果
 */
export interface mapObjectRule {
  $$$$: Array<Rule>;
  [propName: string]: Array<Rule>;
}

export default (data: any, rule: object) => {
  let $obj: any = {};
  let $key: boolean = false;
  forIn(rule, (value: any, key: string) => {
    if (key === "$$$$") {
      data = mapFuns(data, value);
    } else {
      $key = true;
      $obj[key] = mapFuns(data, value);
    }
  });

  return $key ? $obj : data;
};
