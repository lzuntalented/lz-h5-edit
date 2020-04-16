"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../core/constants");

var config = [{
  label: '文本',
  key: 'text',
  initValue: '按钮',
  renderType: _constants.STYLE_RENDER_TYPE_INPUT
}, {
  label: '按钮类型',
  key: 'type',
  initValue: 'primary',
  renderType: _constants.STYLE_RENDER_TYPE_SELECT,
  props: {
    options: [{
      key: ' ',
      text: '默认'
    }, {
      key: 'primary',
      text: '蓝色'
    }, {
      key: 'danger',
      text: '红色'
    }]
  }
}];
var _default = config;
exports["default"] = _default;