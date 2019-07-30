import { Request } from "../";

new Request()
  .startRequest({
    url: "https://www.aikantxt.la/modules/article/search.php",
    method: "post",
    response: "text",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    param: {
      searchtype: "articlename",
      searchkey: "三寸人间"
    },
    encode: "gbk"
  })
  .then((data: any) => {
    console.log(data);
  })
  .catch((err: any) => {
    console.log(err);
  });
