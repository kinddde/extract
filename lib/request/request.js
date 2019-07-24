"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const defaults = {};
exports.default = (url, options) => {
    return node_fetch_1.default(url, Object.assign({}, defaults, options));
};
//# sourceMappingURL=request.js.map