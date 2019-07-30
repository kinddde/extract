import { URI } from "gbk.js";

// console.log(URI.encodeURI("三寸人间"));

import { forIn } from "lodash";

export default (source: object): any => {
  let obj: any = {};

  forIn(source, (value, key) => {
    obj[key] = URI.encodeURI(value);
  });

  return obj;
};
