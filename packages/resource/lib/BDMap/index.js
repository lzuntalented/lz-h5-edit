"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _edit = _interopRequireDefault(require("./edit"));

var _BDMap = _interopRequireDefault(require("./BDMap"));

var _config = _interopRequireDefault(require("./config"));

var _default = {
  edit: _edit["default"],
  render: _BDMap["default"],
  style: _config["default"],
  size: {
    height: 320
  },
  name: '地图'
};
exports["default"] = _default;