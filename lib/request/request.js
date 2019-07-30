"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const defaults = {};
exports.default = (url, options) => {
    return node_fetch_1.default(url, Object.assign({}, defaults, options));
};
