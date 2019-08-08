import { DOMParser } from "xmldom";

function replaceHtml(str: string): string {
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
export type domParserRule = string;

export default (html: string): any => {
  let str = replaceHtml(html);

  return dom.parseFromString(str, "text/xml");
};
