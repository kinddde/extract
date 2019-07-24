"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Timer {
    constructor({ logger = false } = {}) {
        this.__logger__ = logger;
        this.__start__ = 0;
        this.__end__ = 0;
    }
    start() {
        this.__start__ = Date.now();
    }
    end(prefix) {
        this.__end__ = Date.now();
        this.__logger__ &&
            console.log(prefix || "", "耗时：", this.__end__ - this.__start__);
    }
}
exports.default = Timer;
//# sourceMappingURL=timer.js.map