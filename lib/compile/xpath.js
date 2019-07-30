"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xpath_1 = require("xpath");
exports.default = (doc, xpath) => {
    return xpath_1.select(xpath, doc);
};
