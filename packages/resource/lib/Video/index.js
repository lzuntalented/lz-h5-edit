"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Video = _interopRequireDefault(require("./Video"));

var _config = _interopRequireDefault(require("./config"));

var _default = {
  edit: _Video["default"],
  render: _Video["default"],
  style: _config["default"],
  size: {
    height: 570
  },
  name: '视频'
};
exports["default"] = _default;