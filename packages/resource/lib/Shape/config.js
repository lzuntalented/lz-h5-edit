"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../core/constants");

var config = [{
  label: '形状',
  key: 'shape',
  initValue: '1',
  renderType: _constants.STYLE_RENDER_TYPE_SELECT,
  props: {
    options: [{
      key: '1',
      text: '三角形'
    }, {
      key: '2',
      text: '直线'
    }]
  }
}, {
  label: '形状颜色',
  key: 'stroke',
  initValue: '#08A1EF',
  renderType: _constants.STYLE_RENDER_TYPE_COLOR
}, {
  label: '背景色',
  key: 'bgColor',
  initValue: '',
  renderType: _constants.STYLE_RENDER_TYPE_COLOR
}];
var _default = config;
exports["default"] = _default;