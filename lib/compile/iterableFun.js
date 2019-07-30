"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapObject_1 = __importDefault(require("./mapObject"));
exports.default = (source, rule) => {
    return source.map((item) => {
        return mapObject_1.default(item, rule);
    });
};
