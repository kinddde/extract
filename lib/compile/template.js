"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.default = (source, rule) => {
    return lodash_1.template(rule)({ data: source });
};
