import request from "./request";

import qs from "qs";
import formData from "./form";
import JSON5 from "json5";
import gbk from "./gbk";
import map from "./map";

import { RequestOption, RequestParam } from "./interface";

export default class Request {
  private $logger: boolean;

  private $url: string;
  private $method: string;

  private $response: string;

  private $paramType: string;

  private $param: object;
  private $data: any;
  private $encode: string;

  private reuqestParam: RequestParam;

  constructor(option: RequestOption = { logger: false }) {
    this.$logger = option.logger;
  }

  startRequest(prequestPram: RequestParam) {
    let {
      url,
      method = "GET",
      response = "json",
      param,
      encode = "qs",
      paramType = "json",
      paramRule
    } = prequestPram;

    this.reuqestParam = prequestPram;

    this.$url = url;
    this.$method = method.toUpperCase();
    this.$response = response;

    this.$paramType = paramType;

    this.$param = param;

    this.$data = null;

    this.$encode = encode;

    if (this.$encode === "gbk") {
      this.$param = gbk(this.$param);
    }

    if (paramRule) {
      this.$param = map(paramRule, this.$param);
    }

    if (this.$method === "GET") {
      return this.get();
    }

    return this.post();
  }

  private get() {
    let url = qs.stringify(this.$param);

    this.$url = this.$url + url;

    return this.request();
  }

  private post() {
    if (this.$paramType === "form") {
      this.$data = formData(this.$param);
    } else {
      this.$data = qs.stringify(this.$param, {
        encode: false
      });
    }

    return this.request();
  }

  private request() {
    return request(this.$url, {
      method: this.$method,
      body: this.$data,
      headers: {
        ...(this.reuqestParam ? this.reuqestParam.headers || {} : {})
      }
    })
      .then((res: any) => {
        return res.text();
      })
      .then((res: any) => {
        if (this.$response === "text") {
          return res;
        }
        return JSON5.parse(res);
      });
  }
}
