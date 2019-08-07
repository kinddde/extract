"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function replaceFun(source, rule) {
    let reg = new RegExp(rule.reg, "g");
    return source.replace(reg, rule.target || "");
}
exports.default = replaceFun;
