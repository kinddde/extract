"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

/**
 *  matchFun 规则
 *  @rule 正则表达式  ''.match
 */
function matchFun(source, rule) {
  var reg = new RegExp(rule);
  return source.match(reg);
}

var _default = matchFun;
exports["default"] = _default;