export interface RequestOption {
  logger?: boolean;
}

export interface RequestParam {
  url: string;
  method: string;
  headers?: object;
  response?: "json" | "text";
  paramType?: "json" | "form";
  paramRule?: object;
  param?: object;
  encode?: "qs" | "gbk";
}
