"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Input = _interopRequireDefault(require("./Input"));

function InputEdit(props) {
  var defaultAttrs = props.defaultAttrs,
      others = (0, _objectWithoutProperties2["default"])(props, ["defaultAttrs"]);
  var styleProps = Object.assign({
    editAble: true
  }, defaultAttrs, others);
  return /*#__PURE__*/_react["default"].createElement(_Input["default"], styleProps);
}

InputEdit.prototype.propTypes = {
  defaultAttrs: _propTypes["default"].object.isRequired
};
var _default = InputEdit;
exports["default"] = _default;