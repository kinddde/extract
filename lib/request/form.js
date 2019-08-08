"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _formData = _interopRequireDefault(require("form-data"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = source => {
  let form = new _formData.default();
  (0, _lodash.forIn)(source, (value, key) => {
    form.append(key, value);
  });
  return form;
};

exports.default = _default;