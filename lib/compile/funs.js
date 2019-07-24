"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boolean_1 = require("./boolean");
const domParser_1 = require("./domParser");
const iterable_1 = require("./iterable");
const iterableFun_1 = require("./iterableFun");
const jsonPath_1 = require("./jsonPath");
const mapKey_1 = require("./mapKey");
const mapObject_1 = require("./mapObject");
const match_1 = require("./match");
const replace_1 = require("./replace");
const toString_1 = require("./toString");
const xpath_1 = require("./xpath");
const timer_1 = require("../util/timer");
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
    }
}
const timer = new timer_1.default({ logger: true });
exports.default = (data, rules) => {
    let param = data;
    for (let rule of rules) {
        timer.start();
        param = resolveFun(param, rule);
        timer.end(rule.fun);
    }
    return param;
};
//# sourceMappingURL=funs.js.map