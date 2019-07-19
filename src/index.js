const request = require("./request");
const xpath = require("xpath");
const dom = require("xmldom").DOMParser;

function replaceHtml(str) {
  return str.replace(/<html\s.*?>/g, "<html>").replace(/&nbsp;/g, "");
}

request("https://www.23us.us/html/40/40021/")
  .then(data => {
    let html = replaceHtml(data);

    let doc = new dom({
      errorHandler: {
        warning: function(w) {
          console.log(1);
        },
        error: () => {
          console.log(2);
        },
        fatalError: () => {
          console.log(3);
        }
      }
    }).parseFromString(html, "text/xml");

    let titles = xpath.select("//div[@class='listmain']//dd/a/[@href, text()]", doc);

    // titles = titles.map(item => {
    //   return item.value;
    // });

    console.log(titles);
  })
  .catch(err => {
    console.log(err);
  });
