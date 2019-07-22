const booleanFun = require("./boolean");
const mapKeyFun = require("./mapKey");
const iterableFun = require("./iterable");
const jsonPathFun = require("./jsonPath");
const toStringFun = require("./toString");

function resolveFun(data, rule) {
  const { fun, arg } = rule;
  switch (fun) {
    case "boolean":
      return booleanFun(data, arg);
      break;
    case "jsonPath":
      return jsonPathFun(data, arg);
      break;
    case "mapKey":
      return mapKeyFun(data, arg);
      break;
    case "iterable":
      return iterableFun(data, arg);
      break;
    case "toString":
      return toStringFun(data);
      break;
  }
}

module.exports = (data, rules) => {
  let param = data;

  for (let rule of rules) {
    param = resolveFun(param, rule);
  }

  return param;
};
