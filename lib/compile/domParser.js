"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _xmldom = require("xmldom");

function replaceHtml(str) {
  return str.replace(/<html\s.*?>/g, "<html>").replace(/&nbsp;/g, "");
}

const dom = new _xmldom.DOMParser({
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

var _default = html => {
  let str = replaceHtml(html);
  return dom.parseFromString(str, "text/xml");
};

exports.default = _default;