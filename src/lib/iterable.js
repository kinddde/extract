const qs = require("qs");
const _ = require("lodash");

/**
 *
 *
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */

// console.log(
//   qs.stringify({
//     status: [{ fun: "boolean", arg: "连载" }],
//     $$: [{ fun: "boolean", arg: "连载" }]
//   })
// );
// console.log(
//   qs.parse(
//     "status%5B0%5D%5Bfun%5D=boolean&status%5B0%5D%5Barg%5D=%E8%BF%9E%E8%BD%BD"
//   )
// );
module.exports = (source, rule) => {
  const mapFuns = require("./funs");

  return source.map(item => {
    let $obj = {};
    _.forIn(rule, (value, key) => {
      if (key === "$$") {
        $obj = mapFuns(item, value);
      } else {
        $obj[key] = mapFuns(item[key], value);
      }
    });

    return $obj;
  });
};
