import { forIn, each, trim, isArray, isObject } from "lodash";

function mapKey(obj: object, map: Map<string, string>) {
  let $obj: any = {};

  forIn(obj, (value: any, key: string) => {
    if (map.get(key)) {
      $obj[map.get(key)] = value;
    }
  });

  return $obj;
}

function resolveMapKeys(mapKeys: string) {
  let map = new Map<string, string>();

  let strs = mapKeys.split(",");

  each(strs, (str: string) => {
    let $str = str.split("=");
    map.set(trim($str[0]), trim($str[1]));
  });

  return map;
}

/**
 * 转换obj 属性名称
 * @param  {[objec | arrary]} source  []
 * @param  {[string]} mapkeys [Id=id,Name=title,Author=author]
 * @return {[type]}         [description]
 */
function mapKeys(source: any, mapkeys: string): any {
  if (!mapkeys) {
    throw new Error("mapkey keys is null");
  }
  let map = resolveMapKeys(mapkeys);

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

  throw new Error("mapkey source 类型不符");

  return source;
}

// let obj = mapKeys(
//   [
//     {
//       Id: "284214",
//       Name: "三寸时光",
//       Author: "沅昔",
//       Img: "https://imgapi.jiaston.com/BookFiles/BookImages/sancunshiguang.jpg",
//       Desc:
//         "对的时间遇见对的人，对的地点遇见对的人。过去已然过去，把握现在和未来，向前看，一切都将会变得美好。",
//       BookStatus: "连载",
//       LastChapterId: "1447752",
//       LastChapter: "第 22 章",
//       CName: "女生频道",
//       UpdateTime: "2018-06-16 00:00:00"
//     }
//   ],
//   "Id=id,Name=title,Author=author"
// );
//
// console.log(obj);

export default mapKeys;
