"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _edit = _interopRequireDefault(require("./edit"));

var _Picture = _interopRequireDefault(require("./Picture"));

var _config = _interopRequireDefault(require("./config"));

var _default = {
  edit: _edit["default"],
  render: _Picture["default"],
  style: _config["default"],
  size: {
    height: 320
  },
  name: '图片'
};
exports["default"] = _default;