"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _jsonpath = _interopRequireDefault(require("jsonpath"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(source, xpath) {
  return _jsonpath["default"].value(source, xpath);
};

exports["default"] = _default;