export default class Timer {
  private __logger__: boolean;
  private __start__: number;
  private __end__: number;

  constructor({ logger = false } = {}) {
    this.__logger__ = logger;

    this.__start__ = 0;

    this.__end__ = 0;
  }

  start() {
    this.__start__ = Date.now();
  }

  end(prefix: string) {
    this.__end__ = Date.now();

    this.__logger__ &&
      console.log(prefix || "", "耗时：", this.__end__ - this.__start__);
  }
}
