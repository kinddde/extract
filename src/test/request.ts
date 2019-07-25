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
      searchkey: "%C8%FD%B4%E7%C8%CB%BC%E4"
    }
  })
  .then((data: any) => {
    console.log(data);
  })
  .catch((err: any) => {
    console.log(err);
  });
