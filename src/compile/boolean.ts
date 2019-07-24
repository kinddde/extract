
/**
 * boolean 规则
 *
 * 对传入的字符串进行比较  ===
 */
export type booleanRule = string;

export default (source: string, rule: string) => {
  return source === rule;
};
