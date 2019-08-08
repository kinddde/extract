const stringifyObject = require("stringify-object");
const qs = require("qs");

const jsonFuture = require("json-future");

const data = {
  url:
    "https://www.23us.us/html/<%= parseInt(Math.random(0, 1) * 100) %>/<%=bookId%>/<%=chapterId%>.html",
  urlTemplate: "true",
  method: "GET",
  param: {
    bookId: "40190",
    chapterId: "18952519"
  },
  paramType: "json",
  encode: "qs",
  response: "text",
  rules: [
    {
      fun: "domParse"
    },
    {
      fun: "xpath",
      arg: '//div[@id="content"]/text()'
    },
    {
      fun: "mapObject",
      arg: {
        contents: [
          {
            fun: "iterableFun",
            arg: {
              $$$$: [{ fun: "toString" }, { fun: "trim" }]
            }
          },
          {
            fun: "filterEmptyString"
          }
        ]
      }
    }
  ]
};
const pretty = stringifyObject(data, {
  indent: " ",
  singleQuotes: false
});

console.log(pretty);

console.log(qs.parse(qs.stringify(data)).rules[2].arg.contents[0].arg);

console.log(jsonFuture.parse(jsonFuture.stringify(data)).rules[2], 123);

// console.log(JSON.parse(pretty));
