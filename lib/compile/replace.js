"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

/**
 * 正则表达式替换文本
 * @reg    正则表达式、字符串
 * @target  目标字符串
 */
function replaceFun(source, rule) {
  let reg = new RegExp(rule.reg, "g");
  return source.replace(reg, rule.target || "");
}

var _default = replaceFun;
exports.default = _default;