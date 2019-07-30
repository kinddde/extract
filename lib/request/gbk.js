"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gbk_js_1 = require("gbk.js");
const lodash_1 = require("lodash");
exports.default = (source) => {
    let obj = {};
    lodash_1.forIn(source, (value, key) => {
        obj[key] = gbk_js_1.URI.encodeURI(value);
    });
    return obj;
};
