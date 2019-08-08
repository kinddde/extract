export default class Timer {
  private __logger__: boolean;

  private __start__: number;

  private __end__: number;

  public constructor({ logger = false } = {}) {
    this.__logger__ = logger;

    this.__start__ = 0;

    this.__end__ = 0;
  }

  public start(): void {
    this.__start__ = Date.now();
  }

  public end(prefix: string): void {
    this.__end__ = Date.now();
    /* eslint-disable  no-console */
    if (this.__logger__) {
      console.log(prefix || "", "耗时：", this.__end__ - this.__start__);
    }
  }
}
