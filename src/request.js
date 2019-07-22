const fetch = require("node-fetch");

module.exports = url => {
  return fetch(url).then(res => {
    return res.json();
  });
};
