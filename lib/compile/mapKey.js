"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _trimInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/trim");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _map2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/map"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapKey(obj, map) {
  let $obj = {};

  for (let [value, key] of map) {
    $obj[key] = obj[value] || value;
  }

  return $obj;
}

function resolveMapKeys(mapKeys) {
  let map = new _map2.default();

  for (let key in mapKeys) {
    map.set((0, _trimInstanceProperty(_lodash))(mapKeys[key]), (0, _trimInstanceProperty(_lodash))(key));
  }

  return map;
}
/**
 * 转换obj 属性名称
 * @param  {[objec | arrary]} source  []
 * @param  {[string]} mapkeys [Id=id,Name=title,Author=author]
 * @return {[type]}         [description]
 */


var _default = (source, mapObj = {}) => {
  let map = resolveMapKeys(mapObj);

  if ((0, _lodash.isArray)(source)) {
    // 数组
    return (0, _map.default)(source).call(source, obj => {
      return mapKey(obj, map);
    });
  }

  if ((0, _lodash.isObject)(source)) {
    // 对象
    return mapKey(source, map);
  }

  return source;
};

exports.default = _default;