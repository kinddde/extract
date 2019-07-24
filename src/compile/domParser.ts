import { DOMParser } from "xmldom";

function replaceHtml(str: string) {
  return str.replace(/<html\s.*?>/g, "<html>").replace(/&nbsp;/g, "");
}

const dom = new DOMParser({
  errorHandler: {
    warning: () => {},
    error: () => {},
    fatalError: () => {}
  }
});

/**
 * domParser 规则
 *
 * html 转换dom结构, xpath执行前需执行转换
 */
export interface domParserRule {}

export default (html: string) => {
  let str = replaceHtml(html);

  return dom.parseFromString(str, "text/xml");
};
