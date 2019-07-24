"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const funs_1 = require("./funs");
exports.default = (data, rule) => {
    let $obj = {};
    lodash_1.forIn(rule, (value, key) => {
        if (key === "$$$$") {
            data = funs_1.default(data, value);
        }
        else {
            $obj[key] = funs_1.default(data, value);
        }
    });
    return $obj;
};
//# sourceMappingURL=mapObject.js.map