const jsonPath = require("./lib/jsonPath");

const request = require("./request");

const mapKey = require("./lib/mapKey");

const mapFuns = require("./lib/funs");

const rules = [
  {
    fun: "jsonPath",
    arg: "$.data"
  },
  {
    fun: "iterable",
    arg: {
      $$: [
        {
          fun: "mapKey",
          arg:
            "Id=id,Name=title,Author=author,Img=cover, Desc=desc, BookStatus=status"
        }
      ],
      status: [{ fun: "boolean", arg: "连载" }]
    }
  }
];

request(
  "https://sou.jiaston.com/search.aspx?key=%E4%B8%89%E5%AF%B8&siteid=app2"
).then(data => {
  let res = mapFuns(data, rules);

  console.log(res);
});
