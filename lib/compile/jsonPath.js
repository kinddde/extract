"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _jsonpath = require("jsonpath");

var _default = (source, xpath) => {
  return (0, _jsonpath.value)(source, xpath);
};

exports.default = _default;