import { Request, Compile, Rule } from "../";

const rule: Array<Rule> = [
  {
    fun: "mapObject",
    arg: {
      $$$$: [{ fun: "domParse" }],
      title: [
        {
          fun: "xpath",
          arg: 'string(//div[contains(@class, "book-info")]/div/h1/text())'
        }
      ],
      author: [
        {
          fun: "xpath",
          arg: `string(//div[contains(@class, "book-info")]/div/em/text())`
        },
        { fun: "replace", arg: { reg: "作者：" } }
      ]
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
