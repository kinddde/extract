/**
 * filterEmptyString 规则
 * @source  字符串数组 去除空字符串
 */
export interface filterEmptyStringRule {}

export default (source: Array<string>): Array<string> => {
  return source.filter(item => {
    return item;
  });
};
