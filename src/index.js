const request = require("./request");
const xpath = require("xpath");
const dom = require("xmldom").DOMParser;

function replaceHtml(str) {
  return str.replace(/<html\s.*?>/g, "<html>").replace(/&nbsp;/g, "");
}

request("http://www.uctxt.com/book/1/1269/")
  .then(data => {
    let html = replaceHtml(data);

    let Dom = new dom({
      errorHandler: {
        warning: function(w) {
          console.log(1);
        },
        error: error => {
          console.log(2);
        },
        fatalError: () => {
          console.log(3);
        }
      }
    });

    let doc = Dom.parseFromString(html, "text/xml");

    let titles = xpath.select(
      `//dl[contains(@class, "chapter-list")]//dd/a`,
      doc
    );

    let links = [];
    for (let item of titles) {
      let str = Dom.parseFromString(item.toString(), "text/xml");

      let $href = xpath.select("string(//@href)", str);
      let $text = xpath.select("string(//text())", str);

      links.push({
        href: $href,
        text: $text
      });
    }

    console.log(links);
  })
  .catch(err => {
    console.log(err);
  });
