import { Request, Compile, Rule } from "../";

const rule: Array<Rule> = [
  { fun: "domParse" },
  { fun: "xpath", arg: `//dl[contains(@class, "chapter-list")]//dd/a` },
  {
    fun: "iterableFun",
    arg: {
      $$$$: [{ fun: "toString" }, { fun: "domParse" }],
      href: [
        { fun: "xpath", arg: `string(//@href)` },
        { fun: "match", arg: "([0-9]*).html$" },
        { fun: "jsonPath", arg: "$..[1]" }
      ],
      title: [{ fun: "xpath", arg: `string(//text())` }]
    }
  }
];

Request({
  url: "http://www.uctxt.com/book/1/1269/",
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
