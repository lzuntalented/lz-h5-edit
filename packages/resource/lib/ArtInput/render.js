"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

// import { Input } from 'antd';
function Text(props) {
  var color = props.color,
      fontSize = props.fontSize,
      text = props.text,
      bgColor = props.bgColor,
      lineHeight = props.lineHeight,
      fontFamily = props.fontFamily;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontFamily: fontFamily,
      width: '100%',
      padding: 10,
      color: color,
      fontSize: fontSize,
      background: bgColor,
      lineHeight: lineHeight,
      textShadow: 'rgb(255, 255, 255) 1px -1px 0px, rgb(255, 255, 255) 0px -1px 0px, rgb(255, 255, 255) 1px 1px 0px, rgb(255, 255, 255) 1px 0px 0px, rgb(255, 255, 255) 1px 1px 0px, rgb(255, 255, 255) 0px 1px 0px, rgb(255, 255, 255) -1px 1px 0px, rgb(255, 255, 255) -1px 0px 0px, rgb(214, 214, 214) 1px 1px 0px, rgb(214, 214, 214) 2px 2px 0px, rgb(214, 214, 214) 3px 3px 0px, rgb(214, 214, 214) 4px 4px 0px, rgb(125, 144, 175) 5px 5px 0.2em',
      fontWeight: 'bold'
    },
    dangerouslySetInnerHTML: {
      __html: text
    }
  });
}

var _default = Text;
exports["default"] = _default;