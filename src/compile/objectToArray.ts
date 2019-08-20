/**
 *  objectToArray 规则
 *
 * 对象转为数组
 */
export type objectToArrayFunRule = string;

function objectToArray(source: object): any[] {
  return [source];
}

export default objectToArray;
