"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

/**
 *  splitFun 规则
 *  @rule 分割字符串
 */
function splitFun(source, rule) {
  return source.split(rule);
}

var _default = splitFun;
exports.default = _default;