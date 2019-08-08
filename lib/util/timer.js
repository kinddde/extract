"use strict";

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _now = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/date/now"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2["default"])(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2["default"])(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Timer =
/*#__PURE__*/
function () {
  function Timer() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$logger = _ref.logger,
        logger = _ref$logger === void 0 ? false : _ref$logger;

    _classCallCheck(this, Timer);

    _defineProperty(this, "__logger__", void 0);

    _defineProperty(this, "__start__", void 0);

    _defineProperty(this, "__end__", void 0);

    this.__logger__ = logger;
    this.__start__ = 0;
    this.__end__ = 0;
  }

  _createClass(Timer, [{
    key: "start",
    value: function start() {
      this.__start__ = (0, _now["default"])();
    }
  }, {
    key: "end",
    value: function end(prefix) {
      this.__end__ = (0, _now["default"])();
      /* eslint-disable  no-console */

      if (this.__logger__) {
        console.log(prefix || "", "耗时：", this.__end__ - this.__start__);
      }
    }
  }]);

  return Timer;
}();

exports["default"] = Timer;