"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const funs_1 = __importDefault(require("./funs"));
exports.default = (source, rule) => {
    return source.map((item) => {
        let $obj = {};
        lodash_1.forIn(rule, (value, key) => {
            if (key === "$$$$") {
                $obj = funs_1.default(item, value);
            }
            else {
                $obj[key] = funs_1.default(item[key], value);
            }
        });
        return $obj;
    });
};
