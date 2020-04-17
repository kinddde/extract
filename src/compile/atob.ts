import atob from "atob";
/**
 * atob 规则
 * Base64 解密
 * @source  字符串
 */
export type atobFunRule = any;

export default (data: string): any => {
  return atob(data);
};
