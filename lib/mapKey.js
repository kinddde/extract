"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
function mapKey(obj, map) {
    let $obj = {};
    lodash_1.forIn(obj, (value, key) => {
        if (map.get(key)) {
            $obj[map.get(key)] = value;
        }
    });
    return $obj;
}
function resolveMapKeys(mapKeys) {
    let map = new Map();
    let strs = mapKeys.split(",");
    lodash_1.each(strs, (str) => {
        let $str = str.split("=");
        map.set(lodash_1.trim($str[0]), lodash_1.trim($str[1]));
    });
    return map;
}
function mapKeys(source, mapkeys) {
    if (!mapkeys) {
        throw new Error("mapkey keys is null");
    }
    let map = resolveMapKeys(mapkeys);
    if (lodash_1.isArray(source)) {
        return source.map((obj) => {
            return mapKey(obj, map);
        });
    }
    if (lodash_1.isObject(source)) {
        return mapKey(source, map);
    }
    throw new Error("mapkey source 类型不符");
    return source;
}
exports.default = mapKeys;
//# sourceMappingURL=mapKey.js.map