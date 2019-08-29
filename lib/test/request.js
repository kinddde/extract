"use strict";

var _gbk = require("gbk.js");

var _index = require("../index");

console.log(_gbk.URI.encodeURI("无敌小邪医"));
new _index.Request({
  logger: true
}).startRequest({
  url: "https://www.shenbiwu.com/modules/article/search.php",
  urlTemplate: false,
  method: "POST",
  paramType: "json",
  param: {
    title: "无敌小邪医"
  },
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  paramRule: {
    searchkey: "title",
    searchtype: "articlename"
  },
  encode: "gbk",
  response: "text"
}).then(console.log);