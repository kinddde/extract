import { Compile, Request } from "../index";

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

Request({
  url: "https://sou.jiaston.com/search.aspx?key=%E4%B8%89%E5%AF%B8&siteid=app2",
  method: "GET"
}).then((data: any) => {
  let res = Compile(data, rules);

  console.log(res);
});