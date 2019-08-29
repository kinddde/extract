import { URI } from "gbk.js";
import { Request } from "../index";

console.log(URI.encodeURI("无敌小邪医"));

new Request({ logger: true })
  .startRequest({
    url: "https://www.shenbiwu.com/modules/article/search.php",
    urlTemplate: false,
    method: "POST",
    paramType: "json",
    param: {
      title: "无敌小邪医"
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    paramRule: {
      searchkey: "title",
      searchtype: "articlename"
    },
    encode: "gbk",
    response: "text"
  })
  .then(console.log);
