"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _lodash = require("lodash");

var _funs = _interopRequireDefault(require("./funs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(data, rule) {
  var source = data;
  var $obj = {};
  var $key = false;
  (0, _lodash.forIn)(rule, function (value, key) {
    if (key === "$$$$") {
      source = (0, _funs["default"])(source, value);
    } else {
      $key = true;
      $obj[key] = (0, _funs["default"])(source, value);
    }
  });
  return $key ? $obj : source;
};

exports["default"] = _default;