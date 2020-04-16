"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../core/constants");

var config = [{
  label: '文本内容',
  key: 'text',
  initValue: '双击输入文本',
  renderType: _constants.STYLE_RENDER_TYPE_CONTENT_EDIT_DIV
}, {
  label: '字号',
  key: 'fontSize',
  initValue: 12,
  renderType: _constants.STYLE_RENDER_TYPE_SELECT,
  valueType: _constants.STYLE_VALUE_TYPE_NUMBER,
  props: {
    options: [{
      key: 12,
      text: '12'
    }, {
      key: 14,
      text: '14'
    }, {
      key: 16,
      text: '16'
    }, {
      key: 18,
      text: '18'
    }, {
      key: 20,
      text: '20'
    }, {
      key: 24,
      text: '24'
    }, {
      key: 48,
      text: '48'
    }]
  }
}, {
  label: '文字颜色',
  key: 'color',
  initValue: '#000000',
  renderType: _constants.STYLE_RENDER_TYPE_COLOR
}, {
  label: '背景颜色',
  key: 'bgColor',
  initValue: '',
  renderType: _constants.STYLE_RENDER_TYPE_COLOR
}];
var _default = config;
exports["default"] = _default;