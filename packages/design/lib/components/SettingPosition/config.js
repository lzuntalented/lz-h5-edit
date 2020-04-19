"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlignConfig = getAlignConfig;
exports["default"] = void 0;

var _constants = require("@lzshow/constants");

function getAlignConfig() {
  return [{
    key: _constants.ACTION_ACTVIE_ALIGN_TOP,
    icon: 'icon-shangduiqi1',
    tip: '顶对齐'
  }, {
    key: _constants.ACTION_ACTVIE_ALIGN_BOTTOM,
    icon: 'icon-xiaduiqi1',
    tip: '底对齐'
  }, {
    key: _constants.ACTION_ACTVIE_ALIGN_LEFT,
    icon: 'icon-zuoduiqi1',
    tip: '左对齐'
  }, {
    key: _constants.ACTION_ACTVIE_ALIGN_RIGHT,
    icon: 'icon-youduiqi1',
    tip: '右对齐'
  }];
}

var _default = function _default() {};

exports["default"] = _default;