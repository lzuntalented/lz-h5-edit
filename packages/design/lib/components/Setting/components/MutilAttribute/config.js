"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlignConfig = getAlignConfig;
exports["default"] = void 0;

var _constants = require("../../../../core/constants");

function getAlignConfig() {
  return [{
    key: _constants.ACTION_MULTI_ALIGN_LEFT,
    icon: 'icon-zuoduiqi',
    tip: '左对齐'
  }, {
    key: _constants.ACTION_MULTI_ALIGN_RIGHT,
    icon: 'icon-youduiqi',
    tip: '右对齐'
  }, {
    key: _constants.ACTION_MULTI_ALIGN_TOP,
    icon: 'icon-shangduiqi',
    tip: '上对齐'
  }, {
    key: _constants.ACTION_MULTI_ALIGN_BOTTOM,
    icon: 'icon-xiaduiqi',
    tip: '下对齐'
  }, {
    key: _constants.ACTION_MULTI_ALIGN_CENTER_HORIZONTAL,
    icon: 'icon-shuipingjuzhongduiqi',
    tip: '水平居中对齐'
  }, {
    key: _constants.ACTION_MULTI_ALIGN_CENTER_VERTICAL,
    icon: 'icon-chuizhijuzhongduiqi',
    tip: '垂直居中对齐'
  }];
}

var _default = function _default() {};

exports["default"] = _default;