import { trim } from "lodash";

/**
 *  trim 规则
 * @source  字符串  trim
 */
export interface trimRule {}

export default (data: string): string => {
  return trim(data);
};
