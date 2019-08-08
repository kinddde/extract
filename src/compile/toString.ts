/**
 *  toString 规则
 * @source  字符串 数字类型
 */
export type toStringRule = string;

export default (data: string | number): string => {
  return data.toString();
};
