"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Text = _interopRequireDefault(require("../../Text"));

var _constants = require("../../core/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getConfig = _Text["default"].getConfig;

function getAddOptions() {
  var addOptions = {
    label: '文字阴影',
    props: {
      defaultOpen: true
    },
    children: [{
      label: '偏移',
      key: ['textShadowX', 'textShadowY'],
      initValue: {
        textShadowX: 0,
        textShadowY: 0
      },
      props: {
        left: 'textShadowX',
        leftText: 'x',
        right: 'textShadowY',
        rightText: 'y'
      },
      renderType: _constants.STYLE_RENDER_TYPE_TWO_INPUT
    }, {
      label: '模糊',
      key: 'textShadowSpread',
      initValue: 0,
      renderType: _constants.STYLE_RENDER_TYPE_INPUT
    }, {
      label: '阴影颜色',
      key: 'textShadowColor',
      initValue: '',
      renderType: _constants.STYLE_RENDER_TYPE_COLOR
    }],
    renderType: _constants.STYLE_RENDER_TYPE_COLLAPSE
  };
  return addOptions;
}

function resetGetConfig() {
  var addOptions = getAddOptions();
  var config = getConfig();
  config[1].initValue = '阴影';
  config[2].initValue = 18;
  config[3].initValue = '#ffffff';
  config.unshift(addOptions);
  return config;
} // const config = style;


var config = resetGetConfig();

var _default = _objectSpread({}, _Text["default"], {
  style: config,
  size: {
    height: 48
  },
  getConfig: resetGetConfig
});

exports["default"] = _default;