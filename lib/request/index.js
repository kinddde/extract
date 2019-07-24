"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("./request");
exports.default = (param) => {
    let { url, method = "GET", type = "json" } = param;
    return request_1.default(url, {
        method
    }).then((res) => {
        if (type === "html") {
            return res.text();
        }
        return res.json();
    });
};
//# sourceMappingURL=index.js.map