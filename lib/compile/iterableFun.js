"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapObject_1 = require("./mapObject");
exports.default = (source, rule) => {
    return source.map((item) => {
        return mapObject_1.default(item, rule);
    });
};
//# sourceMappingURL=iterableFun.js.map