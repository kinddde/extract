/**
 *
 * @param  {[type]} source [description]
 * @param  {[type]} rule   [description]
 * @return {[type]}        [description]
 */

function matchFun(source, rule) {
  let reg = new RegExp(rule);
  return source.match(reg);
}

module.exports = matchFun;
