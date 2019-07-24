"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonpath_1 = require("jsonpath");
exports.default = (source, xpath) => {
    return jsonpath_1.value(source, xpath);
};
//# sourceMappingURL=jsonPath.js.map