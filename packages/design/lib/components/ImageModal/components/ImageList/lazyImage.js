"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

function _default(props) {
  var src = props.src,
      others = (0, _objectWithoutProperties2["default"])(props, ["src"]);

  var _React$useState = _react["default"].useState('http://www.lzuntalented.cn/img/img-default.png'),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      showSrc = _React$useState2[0],
      setShowSrc = _React$useState2[1];

  _react["default"].useState(function () {
    var image = new window.Image();

    image.onload = function () {
      setShowSrc(src);
    };

    image.src = src;
  }, []);

  return /*#__PURE__*/_react["default"].createElement("img", (0, _extends2["default"])({
    src: showSrc
  }, others, {
    alt: ""
  }));
}