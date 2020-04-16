"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfig = getConfig;
exports["default"] = void 0;

var _align = _interopRequireDefault(require("./style/align"));

var _fontFamily = _interopRequireDefault(require("./style/fontFamily"));

var _constants = require("../core/constants");

function getConfig() {
  var config = [{
    label: '文字字体',
    key: 'fontFamily',
    initValue: '默认字体',
    renderType: _fontFamily["default"]
  }, {
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
        key: 26,
        text: '26'
      }, {
        key: 28,
        text: '28'
      }, {
        key: 30,
        text: '30'
      }, {
        key: 32,
        text: '32'
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
  }, {
    key: ['textAlign', 'fontStyle', 'textDecoration', 'fontWeight'],
    initValue: {
      textAlign: 'center',
      fontStyle: '',
      textDecoration: '',
      fontWeight: ''
    },
    renderType: _align["default"]
  }, {
    label: '行高',
    key: 'lineHeight',
    initValue: 1.5,
    renderType: _constants.STYLE_RENDER_TYPE_SLIDER_INPUT,
    props: {
      min: 0,
      max: 3,
      step: 0.1
    }
  }, {
    label: '字间距',
    key: 'letterSpacing',
    initValue: 0,
    renderType: _constants.STYLE_RENDER_TYPE_SLIDER_INPUT,
    props: {
      min: 0,
      max: 100,
      step: 1
    }
  }, {
    label: '透明度',
    key: 'opacity',
    initValue: 1,
    renderType: _constants.STYLE_RENDER_TYPE_SLIDER_INPUT,
    props: {
      min: 0,
      max: 1,
      step: 0.01
    }
  }];
  return config;
}

var _default = getConfig();

exports["default"] = _default;