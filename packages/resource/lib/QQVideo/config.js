"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../core/constants");

var config = [{
  label: '姓名',
  key: 'name',
  initValue: 'lz',
  renderType: _constants.STYLE_RENDER_TYPE_INPUT
}, {
  label: '城市',
  key: 'place',
  initValue: '北京',
  renderType: _constants.STYLE_RENDER_TYPE_INPUT
}, {
  label: '头像',
  key: 'imgSrc',
  initValue: 'http://www.lzuntalented.cn/img/1.jpg',
  renderType: _constants.STYLE_RENDER_TYPE_INPUT
}];
var _default = config;
exports["default"] = _default;