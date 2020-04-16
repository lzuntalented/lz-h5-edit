"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Node;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/tabs/style/css");

var _tabs = _interopRequireDefault(require("antd/lib/tabs"));

var _react = _interopRequireDefault(require("react"));

var _constants = require("../../../../core/constants");

var _config = require("../../../../core/config");

var _config2 = require("./config");

var _utils = require("../../../../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TabPane = _tabs["default"].TabPane;

function Node(props) {
  var onAddComponent = props.onAddComponent,
      onAddComponentWithSize = props.onAddComponentWithSize,
      onAddComponentWithAttrs = props.onAddComponentWithAttrs;
  var fontFamilys = (0, _config.getFontFamilyOptions)();
  var artShadows = (0, _config2.getArtShadowOptions)();
  var artSolids = (0, _config2.getArtSolidOptions)();
  var artBorders = (0, _config2.getArtBorderOptions)();
  return /*#__PURE__*/_react["default"].createElement(_tabs["default"], {
    className: "node",
    defaultActiveKey: "1"
  }, /*#__PURE__*/_react["default"].createElement(TabPane, {
    tab: "\u57FA\u7840\u7EC4\u4EF6",
    key: "1"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center m-t-12 m-b-12"
  }, /*#__PURE__*/_react["default"].createElement(_row["default"], null, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    onClick: onAddComponent(_constants.COMPONENT_TYPE_BUTTON)
  }, "\u6309\u94AE")), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    onClick: onAddComponent(_constants.COMPONENT_TYPE_INPUT)
  }, "\u8F93\u5165\u6846")), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    onClick: onAddComponent(_constants.COMPONENT_TYPE_SHAPE)
  }, "\u5F62\u72B6"))), /*#__PURE__*/_react["default"].createElement(_row["default"], {
    className: "m-t-8"
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    type: "primary",
    onClick: onAddComponent(_constants.COMPONENT_TYPE_MAP)
  }, "\u5730\u56FE")), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    type: "primary",
    onClick: onAddComponent(_constants.COMPONENT_TYPE_QQ_VIDEO)
  }, "QQ\u901A\u8BDD")), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    type: "primary",
    onClick: onAddComponent(_constants.COMPONENT_TYPE_VIDEO)
  }, "\u89C6\u9891"))), /*#__PURE__*/_react["default"].createElement(_row["default"], {
    className: "m-t-8"
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    onClick: onAddComponent(_constants.COMPONENT_TYPE_TEXT_TYPED)
  }, "\u6587\u672C\u6253\u5B57\u673A"))))), /*#__PURE__*/_react["default"].createElement(TabPane, {
    tab: "\u827A\u672F\u5B57",
    key: "2"
  }, /*#__PURE__*/_react["default"].createElement(_row["default"], null, artShadows.map(function (it) {
    return /*#__PURE__*/_react["default"].createElement(_col["default"], {
      span: 8,
      key: it.textShadowColor
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "ys m-b-8",
      onClick: onAddComponentWithAttrs(_constants.COMPONENT_TYPE_ART_SHADOW, it),
      style: {
        textShadow: "".concat(it.textShadowColor, " ").concat(it.textShadowX, "px ").concat(it.textShadowY, "px ").concat(it.textShadowSpread, "px"),
        color: '#fff'
      }
    }, "\u9634\u5F71"));
  }), artSolids.map(function (it) {
    return /*#__PURE__*/_react["default"].createElement(_col["default"], {
      span: 8,
      key: "".concat(it.textShadowColor).concat(it.textSolidColor)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "ys m-b-8",
      onClick: onAddComponentWithAttrs(_constants.COMPONENT_TYPE_ART_SOLID, it),
      style: _objectSpread({
        textShadow: (0, _utils.generatorTexttextShadow)(it)
      }, it)
    }, "\u7ACB\u4F53"));
  }), artBorders.map(function (it) {
    return /*#__PURE__*/_react["default"].createElement(_col["default"], {
      span: 8,
      key: "".concat(it.textShadowColor).concat(it.textSolidColor).concat(it.color)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "ys m-b-8",
      onClick: onAddComponentWithAttrs(_constants.COMPONENT_TYPE_ART_BORDER, it),
      style: _objectSpread({
        textShadow: (0, _utils.generatorTexttextShadow)(it)
      }, it)
    }, "\u63CF\u8FB9"));
  }))), /*#__PURE__*/_react["default"].createElement(TabPane, {
    tab: "\u5B57\u4F53\u793A\u4F8B",
    key: "3"
  }, /*#__PURE__*/_react["default"].createElement(_row["default"], {
    gutter: 18
  }, fontFamilys.map(function (it) {
    return /*#__PURE__*/_react["default"].createElement(_col["default"], {
      span: 8,
      key: it.key,
      className: "m-b-8"
    }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
      style: {
        fontFamily: "example-".concat(it.key)
      },
      onClick: onAddComponentWithAttrs(_constants.COMPONENT_TYPE_TEXT, {
        fontFamily: it.key
      })
    }, "\u5B57\u4F53\u793A\u4F8B"));
  }))));
}