"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
function mapKey(obj, map) {
    let $obj = {};
    for (let [value, key] of map) {
        $obj[key] = obj[value] || value;
    }
    return $obj;
}
function resolveMapKeys(mapKeys) {
    let map = new Map();
    for (let key in mapKeys) {
        map.set(lodash_1.trim(mapKeys[key]), lodash_1.trim(key));
    }
    return map;
}
function mapKeys(source, mapObj = {}) {
    let map = resolveMapKeys(mapObj);
    if (lodash_1.isArray(source)) {
        return source.map((obj) => {
            return mapKey(obj, map);
        });
    }
    if (lodash_1.isObject(source)) {
        return mapKey(source, map);
    }
}
exports.default = mapKeys;
//# sourceMappingURL=mapKey.js.map