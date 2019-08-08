/**
 * filterEmptyString 规则
 * @source  字符串数组 去除空字符串
 */
export type filterEmptyStringRule = string;

export default (source: string[]): string[] => {
  return source.filter(item => {
    return item;
  });
};
