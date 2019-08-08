"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * filterEmptyString 规则
 * @source  字符串数组 去除空字符串
 */
var _default = function _default(source) {
  return (0, _filter["default"])(source).call(source, function (item) {
    return item;
  });
};

exports["default"] = _default;