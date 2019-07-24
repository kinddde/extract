import { trim, isArray, isObject } from "lodash";

/**
 * mapKey 规则
 * @key  目标对象key
 * @value  原对象key , 如果为空, value直接赋值
 */
export interface mapKeyRule {
  [propName: string]: any;
}

function mapKey(obj: any, map: Map<string, string>): object {
  let $obj: any = {};

  for (let [value, key] of map) {
    $obj[key] = obj[value] || value;
  }

  return $obj;
}

function resolveMapKeys(mapKeys: mapKeyRule) {
  let map = new Map<string, string>();

  for (let key in mapKeys) {
    map.set(trim(mapKeys[key]), trim(key));
  }

  return map;
}

/**
 * 转换obj 属性名称
 * @param  {[objec | arrary]} source  []
 * @param  {[string]} mapkeys [Id=id,Name=title,Author=author]
 * @return {[type]}         [description]
 */
function mapKeys(
  source: object | Array<any>,
  mapObj: mapKeyRule = {}
): object | Array<any> {
  let map = resolveMapKeys(mapObj);

  if (isArray(source)) {
    // 数组
    return source.map((obj: object) => {
      return mapKey(obj, map);
    });
  }

  if (isObject(source)) {
    // 对象
    return mapKey(source, map);
  }
}

export default mapKeys;
