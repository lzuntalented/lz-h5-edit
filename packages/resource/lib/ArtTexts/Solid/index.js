"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Shadow = _interopRequireDefault(require("../Shadow"));

var _constants = require("../../core/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getConfig = _Shadow["default"].getConfig;

function getAddOptions() {
  return {
    label: '立体层次',
    props: {
      defaultOpen: true
    },
    children: [{
      label: '尺寸',
      key: 'textSolidSize',
      initValue: 1,
      renderType: _constants.STYLE_RENDER_TYPE_INPUT
    }, {
      label: '颜色',
      key: 'textSolidColor',
      initValue: '',
      renderType: _constants.STYLE_RENDER_TYPE_COLOR
    }, {
      label: '角度',
      key: 'textSolidAngle',
      initValue: 0,
      props: {
        min: 0,
        max: 360,
        step: 1
      },
      renderType: _constants.STYLE_RENDER_TYPE_SLIDER_INPUT
    }],
    renderType: _constants.STYLE_RENDER_TYPE_COLLAPSE
  };
}

function resetGetConfig() {
  var addOptions = getAddOptions();
  var config = getConfig();
  config[2].initValue = '立体';
  config[4].initValue = '#f7e3b9';
  config.unshift(addOptions);
  return config;
}

var config = resetGetConfig();

var _default = _objectSpread({}, _Shadow["default"], {
  style: config,
  size: {
    height: 48
  },
  getConfig: resetGetConfig
});

exports["default"] = _default;