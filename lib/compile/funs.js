"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _getIterator2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator"));

var _boolean = _interopRequireDefault(require("./boolean"));

var _domParser = _interopRequireDefault(require("./domParser"));

var _filterEmptyString = _interopRequireDefault(require("./filterEmptyString"));

var _iterable = _interopRequireDefault(require("./iterable"));

var _iterableFun = _interopRequireDefault(require("./iterableFun"));

var _jsonPath = _interopRequireDefault(require("./jsonPath"));

var _mapKey = _interopRequireDefault(require("./mapKey"));

var _mapObject = _interopRequireDefault(require("./mapObject"));

var _match = _interopRequireDefault(require("./match"));

var _replace = _interopRequireDefault(require("./replace"));

var _toString = _interopRequireDefault(require("./toString"));

var _trim = _interopRequireDefault(require("./trim"));

var _xpath = _interopRequireDefault(require("./xpath"));

var _assign = _interopRequireDefault(require("./assign"));

var _split = _interopRequireDefault(require("./split"));

var _template = _interopRequireDefault(require("./template"));

var _flat = _interopRequireDefault(require("./flat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function resolveFun(data, rule) {
  var fun = rule.fun,
      arg = rule.arg;

  switch (fun) {
    case "boolean":
      return (0, _boolean["default"])(data, arg);

    case "jsonPath":
      return (0, _jsonPath["default"])(data, arg);

    case "mapKey":
      return (0, _mapKey["default"])(data, arg);

    case "iterable":
      return (0, _iterable["default"])(data, arg);

    case "toString":
      return (0, _toString["default"])(data);

    case "xpath":
      return (0, _xpath["default"])(data, arg);

    case "domParse":
      return (0, _domParser["default"])(data);

    case "iterableFun":
      return (0, _iterableFun["default"])(data, arg);

    case "match":
      return (0, _match["default"])(data, arg);

    case "replace":
      return (0, _replace["default"])(data, arg);

    case "mapObject":
      return (0, _mapObject["default"])(data, arg);

    case "trim":
      return (0, _trim["default"])(data);

    case "filterEmptyString":
      return (0, _filterEmptyString["default"])(data);

    case "assign":
      return (0, _assign["default"])(arg);

    case "split":
      return (0, _split["default"])(data, arg);

    case "template":
      return (0, _template["default"])(data, arg);

    case "flat":
      return (0, _flat["default"])(data, arg);

    default:
      return data;
  }
}

var _default = function _default(data, rules) {
  var param = data;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2["default"])(rules), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var rule = _step.value;
      param = resolveFun(param, rule);
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

  return param;
};

exports["default"] = _default;