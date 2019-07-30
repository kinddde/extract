import { forIn } from "lodash";

const map = (source: object, param: object): any => {
  let obj: any = {};

  forIn(source, (value, key) => {
    obj[key] = param[value] || value;
  });

  return obj;
};

export default map;
