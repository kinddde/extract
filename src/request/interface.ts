export interface RequestOption {
  logger?: boolean;
  timeout?: number;
}

export interface RequestParam {
  url: string;

  urlTemplate?: boolean;
  method: string;
  headers?: object;
  response?: "json" | "text";
  paramType?: "json" | "form" | "stringify";
  paramRule?: object;
  param?: object;
  encode?: "qs" | "gbk";
  proxy?: string;
}

export interface ResponseData {
  url: string;
  redirect: boolean;
  body: any;
}
