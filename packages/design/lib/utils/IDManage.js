"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addIds = addIds;
exports.createId = createId;

var _index = require("./index");

var map = []; // 新增已用id集合

function addIds(ids) {
  ids.forEach(function (it) {
    return map.push(it);
  });
} // 创建唯一id


function createId() {
  while (true) {
    var unique = (0, _index.createRandom)();

    if (map.indexOf(unique) === -1) {
      map.push(unique);
      return unique;
    }
  }
}