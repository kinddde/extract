const _ = require("lodash");

function mapKey(obj, map) {
  let $obj = {};

  _.forIn(obj, (value, key) => {
    if (map.get(key)) {
      $obj[map.get(key)] = value;
    }
  });

  return $obj;
}

function resolveMapKeys(mapKeys) {
  let map = new Map();

  let strs = mapKeys.split(",");

  _.each(strs, str => {
    let $str = str.split("=");
    map.set(_.trim($str[0]), _.trim($str[1]));
  });

  return map;
}

/**
 * 转换obj 属性名称
 * @param  {[objec | arrary]} source  []
 * @param  {[string]} mapkeys [Id=id,Name=title,Author=author]
 * @return {[type]}         [description]
 */
function mapKeys(source, mapkeys) {
  if (!mapkeys) {
    throw new Error("mapkey keys is null");
  }
  let map = resolveMapKeys(mapkeys);

  if (_.isArray(source)) {
    // 数组
    return source.map(obj => {
      return mapKey(obj, map);
    });
  }

  if (_.isObject(source)) {
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

module.exports = mapKeys;
