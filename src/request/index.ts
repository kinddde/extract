import request from "./request";

interface Param {
  url: string;
  method: string;
  type?: "json" | "html";
  data?: object;
}

export default (param: Param) => {
  let { url, method = "GET", type = "json" } = param;

  return request(url, {
    method
  }).then((res: any) => {
    if (type === "html") {
      return res.text();
    }

    return res.json();
  });
};
