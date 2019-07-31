"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("./request"));
const qs_1 = __importDefault(require("qs"));
const form_1 = __importDefault(require("./form"));
const json5_1 = __importDefault(require("json5"));
const gbk_1 = __importDefault(require("./gbk"));
const map_1 = __importDefault(require("./map"));
class Request {
    constructor(option = { logger: false }) {
        this.$logger = option.logger;
    }
    startRequest(prequestPram) {
        let { url, method = "GET", response = "json", param, encode = "qs", paramType = "json", paramRule } = prequestPram;
        this.reuqestParam = prequestPram;
        this.$url = url;
        this.$method = method.toUpperCase();
        this.$response = response;
        this.$paramType = paramType;
        this.$param = param;
        this.$data = null;
        this.$encode = encode;
        if (this.$encode === "gbk") {
            this.$param = gbk_1.default(this.$param);
        }
        if (paramRule) {
            this.$param = map_1.default(paramRule, this.$param);
        }
        if (this.$method === "GET") {
            return this.get();
        }
        return this.post();
    }
    get() {
        let url = qs_1.default.stringify(this.$param);
        this.$url = this.$url + url;
        return this.request();
    }
    post() {
        if (this.$paramType === "form") {
            this.$data = form_1.default(this.$param);
        }
        else {
            this.$data = qs_1.default.stringify(this.$param, {
                encode: false
            });
        }
        return this.request();
    }
    request() {
        return request_1.default(this.$url, {
            method: this.$method,
            body: this.$data,
            headers: Object.assign({}, (this.reuqestParam ? this.reuqestParam.headers || {} : {}))
        })
            .then((res) => {
            return res.text();
        })
            .then((res) => {
            if (this.$response === "text") {
                return res;
            }
            return json5_1.default.parse(res);
        });
    }
}
exports.default = Request;
