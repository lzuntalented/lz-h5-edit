"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function ButtonRender(props) {
  var text = props.text,
      type = props.type;
  return /*#__PURE__*/_react["default"].createElement(_button["default"], {
    style: {
      width: '100%'
    },
    type: type
  }, text);
}

ButtonRender.prototype.propTypes = {
  text: _propTypes["default"].string,
  type: _propTypes["default"].string
};
ButtonRender.prototype.defaultProps = {
  text: '',
  type: ''
};
var _default = ButtonRender;
exports["default"] = _default;