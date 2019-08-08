"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boolean_1 = __importDefault(require("./boolean"));
const domParser_1 = __importDefault(require("./domParser"));
const filterEmptyString_1 = __importDefault(require("./filterEmptyString"));
const iterable_1 = __importDefault(require("./iterable"));
const iterableFun_1 = __importDefault(require("./iterableFun"));
const jsonPath_1 = __importDefault(require("./jsonPath"));
const mapKey_1 = __importDefault(require("./mapKey"));
const mapObject_1 = __importDefault(require("./mapObject"));
const match_1 = __importDefault(require("./match"));
const replace_1 = __importDefault(require("./replace"));
const toString_1 = __importDefault(require("./toString"));
const trim_1 = __importDefault(require("./trim"));
const xpath_1 = __importDefault(require("./xpath"));
const assign_1 = __importDefault(require("./assign"));
const split_1 = __importDefault(require("./split"));
const template_1 = __importDefault(require("./template"));
function resolveFun(data, rule) {
    const { fun, arg } = rule;
    switch (fun) {
        case "boolean":
            return boolean_1.default(data, arg);
        case "jsonPath":
            return jsonPath_1.default(data, arg);
        case "mapKey":
            return mapKey_1.default(data, arg);
        case "iterable":
            return iterable_1.default(data, arg);
        case "toString":
            return toString_1.default(data);
        case "xpath":
            return xpath_1.default(data, arg);
        case "domParse":
            return domParser_1.default(data);
        case "iterableFun":
            return iterableFun_1.default(data, arg);
        case "match":
            return match_1.default(data, arg);
        case "replace":
            return replace_1.default(data, arg);
        case "mapObject":
            return mapObject_1.default(data, arg);
        case "trim":
            return trim_1.default(data);
        case "filterEmptyString":
            return filterEmptyString_1.default(data);
        case "assign":
            return assign_1.default(arg);
        case "split":
            return split_1.default(data, arg);
        case "template":
            return template_1.default(data, arg);
    }
}
exports.default = (data, rules) => {
    let param = data;
    for (let rule of rules) {
        param = resolveFun(param, rule);
    }
    return param;
};
