"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const funs_1 = __importDefault(require("./funs"));
exports.default = (data, rule) => {
    let $obj = {};
    let $key = false;
    lodash_1.forIn(rule, (value, key) => {
        if (key === "$$$$") {
            data = funs_1.default(data, value);
        }
        else {
            $key = true;
            $obj[key] = funs_1.default(data, value);
        }
    });
    return $key ? $obj : data;
};
