"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const map = (source, param) => {
    let obj = {};
    lodash_1.forIn(source, (value, key) => {
        obj[key] = param[value] || value;
    });
    return obj;
};
exports.default = map;
