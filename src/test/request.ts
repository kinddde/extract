import { URI } from "gbk.js";
import { Request } from "../index";

new Request({ logger: true })
  .startRequest({
    url: "http://httpbin.org/ip",
    urlTemplate: false,
    method: "GET",

    encode: "gbk",
    response: "json",
    proxy: "socks4://181.143.16.58:44550"
    // proxy: "http://51.158.114.177:8811"
  })
  .then(data => {
    console.log(data);
  });
