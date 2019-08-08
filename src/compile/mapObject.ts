import { forIn } from "lodash";

import mapFuns, { Rule } from "./funs";

/**
 * mapObject方法规则
 * 遍历传入的对象， 依次赋值
 *
 * @$$$$ 统一执行的方法  如果没有设置其他key, 将返回统一处理后的结果
 */
export interface MapObjectRule {
  $$$$: Rule[];
  [propName: string]: Rule[];
}

export default (data: any, rule: object) => {
  let source = data;
  let $obj: any = {};
  let $key = false;
  forIn(rule, (value: any, key: string) => {
    if (key === "$$$$") {
      source = mapFuns(source, value);
    } else {
      $key = true;
      $obj[key] = mapFuns(source, value);
    }
  });

  return $key ? $obj : source;
};
