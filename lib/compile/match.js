"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function matchFun(source, rule) {
    let reg = new RegExp(rule);
    return source.match(reg);
}
exports.default = matchFun;
//# sourceMappingURL=match.js.map