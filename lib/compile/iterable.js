"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const funs_1 = require("./funs");
exports.default = (source, rule) => {
    return source.map((item) => {
        let $obj = {};
        lodash_1.forIn(rule, (value, key) => {
            if (key === "$$$$") {
                $obj = funs_1.default(item, value);
            }
            else {
                $obj[key] = funs_1.default(item[key], value);
            }
        });
        return $obj;
    });
};
//# sourceMappingURL=iterable.js.map