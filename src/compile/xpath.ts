import { select } from "xpath";

/**
 * xpath 规则
 * @xpath 解析规则 文档：http://www.w3school.com.cn/xpath/xpath_syntax.asp
 */
export type xpathRule = string;
export default (doc: any, xpath: string) => {
  return select(xpath, doc);
};
