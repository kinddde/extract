"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _flat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/flat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *  flatFun 规则
 *  @rule 展开数据  [].flat(arg)
 */
var _default = function _default(source) {
  var rule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "1";
  return (0, _flat["default"])(source).call(source, Number(rule));
};

exports["default"] = _default;