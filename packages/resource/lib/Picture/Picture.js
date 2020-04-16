"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function Picture(props) {
  var imgSrc = props.imgSrc,
      onLoad = props.onLoad;
  var style = {
    width: '100%'
  };

  if (onLoad) {
    style.minHeight = '40%';
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: style
  }, imgSrc && /*#__PURE__*/_react["default"].createElement("img", {
    src: imgSrc,
    alt: "",
    onLoad: onLoad,
    width: "100%"
  }));
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