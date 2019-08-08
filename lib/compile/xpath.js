"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _xpath = require("xpath");

var _default = (doc, xpath) => {
  return (0, _xpath.select)(xpath, doc);
};

exports.default = _default;