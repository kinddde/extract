"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xmldom_1 = require("xmldom");
function replaceHtml(str) {
    return str.replace(/<html\s.*?>/g, "<html>").replace(/&nbsp;/g, "");
}
const dom = new xmldom_1.DOMParser({
    errorHandler: {
        warning: () => { },
        error: () => { },
        fatalError: () => { }
    }
});
exports.default = (html) => {
    let str = replaceHtml(html);
    return dom.parseFromString(str, "text/xml");
};
//# sourceMappingURL=domParser.js.map