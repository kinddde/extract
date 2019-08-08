"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _mapObject = _interopRequireDefault(require("./mapObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 *
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
var _default = (source, rule) => {
  return (0, _map.default)(source).call(source, item => {
    return (0, _mapObject.default)(item, rule);
  });
};

exports.default = _default;