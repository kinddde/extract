"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _lodash = require("lodash");

var _default = (source, rule) => {
  return (0, _lodash.template)(rule)({
    data: source
  });
};

exports.default = _default;