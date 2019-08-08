"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _lodash = require("lodash");

var _funs = _interopRequireDefault(require("./funs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (source, rule) => {
  return (0, _map.default)(source).call(source, item => {
    let $obj = {};
    (0, _lodash.forIn)(rule, (value, key) => {
      if (key === "$$$$") {
        $obj = (0, _funs.default)(item, value);
      } else {
        $obj[key] = (0, _funs.default)(item[key], value);
      }
    });
    return $obj;
  });
};

exports.default = _default;