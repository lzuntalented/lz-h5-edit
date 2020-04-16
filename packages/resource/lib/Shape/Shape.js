"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function Picture(props) {
  var shape = props.shape,
      stroke = props.stroke,
      bgColor = props.bgColor;
  var style = {
    background: bgColor,
    width: '100%'
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: style
  }, shape === '1' && /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    id: "4957228616",
    x: "0px",
    y: "0px",
    width: "100%",
    height: "100%",
    viewBox: "0 0 119.5 103.5",
    enableBackground: "new 0 0 119.5 103.5",
    xmlSpace: "preserve",
    preserveAspectRatio: "none",
    className: "element svg-element"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: stroke,
    d: "M59.7,0L0,103.5h119.5L59.7,0z M59.7,4l56.3,97.5H3.5L59.7,4z",
    style: {
      fill: stroke
    }
  })), shape === '2' && /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    baseProfile: "full",
    height: "100%",
    width: "100%",
    viewBox: "0 0 420 120",
    preserveAspectRatio: "none",
    id: "1019877593",
    className: "element svg-element"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: stroke,
    d: "M0 60h420v1h-420v-1z",
    style: {
      fill: stroke
    }
  })));
}

Picture.prototype.propTypes = {
  imgSrc: _propTypes["default"].string,
  onLoad: _propTypes["default"].func
};
Picture.prototype.defaultProps = {
  imgSrc: '',
  onLoad: function onLoad() {}
};
var _default = Picture;
exports["default"] = _default;