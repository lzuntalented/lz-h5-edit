"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../core/constants");

var config = [{
  label: '文字',
  key: 'text',
  initValue: '文本',
  renderType: _constants.STYLE_RENDER_TYPE_INPUT
}, {
  label: '文字颜色',
  key: 'color',
  initValue: '#000',
  renderType: _constants.STYLE_RENDER_TYPE_COLOR
}, {
  label: '背景颜色',
  key: 'bgColor',
  initValue: '按钮',
  renderType: _constants.STYLE_RENDER_TYPE_COLOR
}];
var _default = config;
exports["default"] = _default;