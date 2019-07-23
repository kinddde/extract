const jsonpath = require("jsonpath");

module.exports = (source, xpath) => {
  return jsonpath.value(source, xpath);
};
