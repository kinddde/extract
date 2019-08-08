"use strict";

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _qs = _interopRequireDefault(require("qs"));

var _lodash = require("lodash");

var _json = _interopRequireDefault(require("json5"));

var _gbk = _interopRequireDefault(require("./gbk"));

var _map = _interopRequireDefault(require("./map"));

var _form = _interopRequireDefault(require("./form"));

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(source, true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(source)).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { (0, _defineProperty2.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Request {
  constructor(option = {
    logger: false
  }) {
    _defineProperty(this, "$logger", void 0);

    _defineProperty(this, "$url", void 0);

    _defineProperty(this, "$method", void 0);

    _defineProperty(this, "$response", void 0);

    _defineProperty(this, "$paramType", void 0);

    _defineProperty(this, "$param", void 0);

    _defineProperty(this, "$data", void 0);

    _defineProperty(this, "$encode", void 0);

    _defineProperty(this, "reuqestParam", void 0);

    _defineProperty(this, "$urlTemplate", void 0);

    this.$logger = option.logger;
  }

  startRequest(prequestPram) {
    let {
      url,
      method = "GET",
      response = "json",
      param,
      encode = "qs",
      paramType = "json",
      paramRule,
      urlTemplate = false
    } = prequestPram;
    this.reuqestParam = prequestPram;
    this.$url = url;
    this.$method = method.toUpperCase();
    this.$response = response;
    this.$paramType = paramType;
    this.$param = param;
    this.$data = null;
    this.$encode = encode;
    this.$urlTemplate = urlTemplate;

    if (this.$encode === "gbk") {
      this.$param = (0, _gbk.default)(this.$param);
    }

    if (paramRule) {
      this.$param = (0, _map.default)(paramRule, this.$param);
    }

    if (urlTemplate) {
      this.$url = (0, _lodash.template)(this.$url)(this.$param);
    }

    if (this.$method === "GET") {
      return this.get();
    }

    return this.post();
  }

  get() {
    if (!this.$urlTemplate) {
      let url = _qs.default.stringify(this.$param || {});

      this.$url = `${this.$url}?${url}`;
    }

    return this.request();
  }

  post() {
    if (this.$paramType === "form") {
      this.$data = (0, _form.default)(this.$param);
    } else {
      this.$data = _qs.default.stringify(this.$param, {
        encode: false
      });
    }

    return this.request();
  }

  request() {
    /* eslint-disable  no-console */
    if (this.$logger) {
      console.log(this.$url);
    }

    return (0, _request.default)(this.$url, {
      method: this.$method,
      body: this.$data,
      headers: _objectSpread({}, this.reuqestParam ? this.reuqestParam.headers || {} : {})
    }).then(res => {
      return res.text();
    }).then(res => {
      if (this.$response === "text") {
        return res;
      }

      return _json.default.parse(res);
    });
  }

}

exports.default = Request;