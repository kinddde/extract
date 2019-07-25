import { Request, Compile, Rule } from "../";

const rule: Array<Rule> = [
  {
    fun: "domParse"
  },
  {
    fun: "xpath",
    arg: `//div[@id="content"]/text()`
  },
  {
    fun: "iterableFun",
    arg: { $$$$: [{ fun: "toString" }, { fun: "trim" }] }
  },
  {
    fun: "filterEmptyString"
  }
];

Request({
  url: "https://www.23us.us/html/40/40021/20037222.html",
  method: "GET",
  type: "html"
})
  .then((html: any) => {
    let links = Compile(html, rule);

    console.log(links);
  })
  .catch((err: any) => {
    console.log(err);
  });
