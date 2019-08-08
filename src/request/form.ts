import FormData from "form-data";

import { forIn } from "lodash";

export default (source: object) => {
  let form = new FormData();

  forIn(source, (value, key) => {
    form.append(key, value);
  });

  return form;
};
