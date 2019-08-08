"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _trimInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/trim");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _map2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/map"));

var _getIterator2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = (0, _getIterator2["default"])(arr), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if ((0, _isArray["default"])(arr)) return arr; }

function mapKey(obj, map) {
  var $obj = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2["default"])(map), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          value = _step$value[0],
          key = _step$value[1];

      $obj[key] = obj[value] || value;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return $obj;
}

function resolveMapKeys(mapKeys) {
  var map = new _map2["default"]();

  for (var key in mapKeys) {
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


var _default = function _default(source) {
  var mapObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var map = resolveMapKeys(mapObj);

  if ((0, _lodash.isArray)(source)) {
    // 数组
    return (0, _map["default"])(source).call(source, function (obj) {
      return mapKey(obj, map);
    });
  }

  if ((0, _lodash.isObject)(source)) {
    // 对象
    return mapKey(source, map);
  }

  return source;
};

exports["default"] = _default;