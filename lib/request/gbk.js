"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _gbk = require("gbk.js");

var _lodash = require("lodash");

// console.log(URI.encodeURI("三寸人间"));
var _default = function _default(source) {
  var obj = {};
  (0, _lodash.forIn)(source, function (value, key) {
    obj[key] = _gbk.URI.encodeURI(value);
  });
  return obj;
};

exports["default"] = _default;