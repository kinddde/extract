"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

/**
 * boolean 规则
 *
 * 对传入的字符串进行比较  ===
 */
var _default = (source, rule) => {
  return source === rule;
};

exports.default = _default;