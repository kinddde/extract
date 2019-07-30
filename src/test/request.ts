import { Request, Rule, Compile } from "../";

import { stringify, parse } from "qs";

const rule: Array<Rule> = [
  { fun: "domParse" },
  { fun: "xpath", arg: `//div[@id="content"]//tr[@id="nr"]` },
  {
    fun: "iterableFun",
    arg: {
      $$$$: [{ fun: "toString" }, { fun: "domParse" }],
      title: [
        {
          fun: "xpath",
          arg: `string(//td[contains(@class, "odd")][1]/a/text())`
        }
      ],
      author: [
        { fun: "xpath", arg: `string(//td[contains(@class, "odd")][2]/text())` }
      ],
      bookId: [
        {
          fun: "xpath",
          arg: `string(//td[contains(@class, "odd")][1]/a/@href)`
        },
        {
          fun: "match",
          arg: "\\/aikan([0-9]*)/$"
        },
        { fun: "jsonPath", arg: "$..[1]" }
      ],
      sourceKey: [
        {
          fun: "assign",
          arg: "aikantxt"
        }
      ]
    }
  }
];

console.log(parse(stringify({ rule: rule })));


let rules = parse(stringify({ rule: rule })).rule;
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
    let links = Compile(data, rules);

    console.log(links);
  })
  .catch((err: any) => {
    console.log(err);
  });
