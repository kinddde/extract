"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _lodash = require("lodash");

const map = (source, param) => {
  let obj = {};
  (0, _lodash.forIn)(source, (value, key) => {
    obj[key] = param[value] || value;
  });
  return obj;
};

var _default = map;
exports.default = _default;