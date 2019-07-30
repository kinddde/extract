"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const funs_1 = __importDefault(require("./compile/funs"));
exports.Compile = funs_1.default;
const request_1 = __importDefault(require("./request"));
exports.Request = request_1.default;
