"use strict";

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _now = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/date/now"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Timer {
  constructor({
    logger = false
  } = {}) {
    _defineProperty(this, "__logger__", void 0);

    _defineProperty(this, "__start__", void 0);

    _defineProperty(this, "__end__", void 0);

    this.__logger__ = logger;
    this.__start__ = 0;
    this.__end__ = 0;
  }

  start() {
    this.__start__ = (0, _now.default)();
  }

  end(prefix) {
    this.__end__ = (0, _now.default)();
    /* eslint-disable  no-console */

    if (this.__logger__) {
      console.log(prefix || "", "耗时：", this.__end__ - this.__start__);
    }
  }

}

exports.default = Timer;