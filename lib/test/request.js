"use strict";

var _jsonPath = _interopRequireDefault(require("../compile/jsonPath"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var str = (0, _jsonPath["default"])({
  data: 1
}, "$..data");
console.log(str);