"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComponetData = getComponetData;
exports["default"] = void 0;

var _constants = require("@lzshow/constants");

var _LocalStorage = _interopRequireDefault(require("./utils/LocalStorage"));

var _config = require("./core/config");

function getComponetData(id) {
  var locals = (0, _config.getLocalTplDatas)();
  var obj = locals.find(function (it) {
    return it.id === id;
  });
  if (obj) return obj.origin;

  if (+id > 0) {
    var mLzLocalStorage = new _LocalStorage["default"](_constants.LOCALSTORAGE_PREVIEW_NAMESPACE);
    var data = mLzLocalStorage.get(_constants.LOCALSTORAGE_PREVIEW_CHACHE, '{}');
    return JSON.parse(data);
  }

  return null;
}

var _default = function _default() {};

exports["default"] = _default;