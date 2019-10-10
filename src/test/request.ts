import { URI } from "gbk.js";
import { Request } from "../index";

new Request({ logger: true })
  .startRequest({
    url: "http://www.yunlaige.com/modules/article/search.php",
    urlTemplate: false,
    method: "POST",
    paramType: "json",
    param: {
      title: "三寸人间"
    },
    paramRule: {
      searchkey: "title",
      action: "login"
    },
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    encode: "gbk",
    response: "text"
  })
  .then(console.log);
