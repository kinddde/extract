import qs from "qs";
import { template } from "lodash";
import JSON5 from "json5";
import gbk from "./gbk";
import map from "./map";
import formData from "./form";
import request from "./request";

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

  private $urlTemplate: boolean;

  public constructor(option: RequestOption = { logger: false }) {
    this.$logger = option.logger;
  }

  public startRequest(prequestPram: RequestParam): any {
    let {
      url,
      method = "GET",
      response = "json",
      param,
      encode = "qs",
      paramType = "json",
      paramRule,
      urlTemplate = false
    } = prequestPram;

    this.reuqestParam = prequestPram;

    this.$url = url;
    this.$method = method.toUpperCase();
    this.$response = response;

    this.$paramType = paramType;

    this.$param = param;

    this.$data = null;

    this.$encode = encode;

    this.$urlTemplate = urlTemplate;

    if (this.$encode === "gbk") {
      this.$param = gbk(this.$param);
    }

    if (paramRule) {
      this.$param = map(paramRule, this.$param);
    }

    if (urlTemplate) {
      this.$url = template(this.$url)(this.$param);
    }

    if (this.$method === "GET") {
      return this.get();
    }

    return this.post();
  }

  private get(): any {
    if (!this.$urlTemplate) {
      let url = qs.stringify(this.$param || {});

      this.$url = `${this.$url}?${url}`;
    }

    return this.request();
  }

  private post(): any {
    if (this.$paramType === "form") {
      this.$data = formData(this.$param);
    } else {
      this.$data = qs.stringify(this.$param, {
        encode: false
      });
    }

    return this.request();
  }

  private request(): any {
    /* eslint-disable  no-console */
    if (this.$logger) {
      console.log(this.$url);
    }

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
