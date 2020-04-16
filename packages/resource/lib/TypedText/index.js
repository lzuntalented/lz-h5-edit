"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _QQVideo = _interopRequireDefault(require("./QQVideo"));

var _config = _interopRequireDefault(require("./config"));

var _default = {
  edit: _QQVideo["default"],
  render: _QQVideo["default"],
  style: _config["default"],
  size: {
    height: 40
  },
  name: 'QQ通话'
};
exports["default"] = _default;