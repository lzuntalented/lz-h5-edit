"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTyped = _interopRequireDefault(require("react-typed"));

require("./index.scss");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var typeHandler = null;

function QQVideo(props) {
  var text = props.text,
      bgColor = props.bgColor,
      showStatus = props.showStatus,
      ohters = (0, _objectWithoutProperties2["default"])(props, ["text", "bgColor", "showStatus"]);

  _react["default"].useEffect(function () {
    if (typeHandler) typeHandler.reset(true);
  }, [text, showStatus]);

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundColor: bgColor
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactTyped["default"], {
    typedRef: function typedRef(typed) {
      typeHandler = typed;
    },
    style: _objectSpread({}, ohters),
    strings: [text],
    typeSpeed: 40
  }));
}

QQVideo.prototype.propTypes = {
  imgSrc: _propTypes["default"].string,
  name: _propTypes["default"].string,
  place: _propTypes["default"].string,
  height: _propTypes["default"].number
};
QQVideo.prototype.defaultProps = {
  imgSrc: '',
  name: '',
  place: '',
  height: 0
};
var _default = QQVideo;
exports["default"] = _default;