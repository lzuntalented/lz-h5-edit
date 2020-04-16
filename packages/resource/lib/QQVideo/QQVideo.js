"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/icon/style/css");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

require("./index.scss");

function QQVideo(props) {
  var imgSrc = props.imgSrc,
      name = props.name,
      place = props.place,
      height = props.height;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%',
      height: height || _utils.winSize.height,
      background: '#232129'
    },
    className: "resource-qq-video"
  }, /*#__PURE__*/_react["default"].createElement(_row["default"], {
    type: "flex",
    justify: "space-between",
    className: "nav"
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "name"
  }, name), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
    className: "place"
  }, place)), /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement("img", {
    src: imgSrc,
    height: "56",
    alt: ""
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bottom"
  }, /*#__PURE__*/_react["default"].createElement(_row["default"], {
    type: "flex",
    justify: "space-between",
    className: "message"
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    type: "clock-circle"
  }), /*#__PURE__*/_react["default"].createElement("br", null), "\u63D0\u9192\u6211"), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    type: "message"
  }), /*#__PURE__*/_react["default"].createElement("br", null), "\u4FE1\u606F")), /*#__PURE__*/_react["default"].createElement(_row["default"], {
    type: "flex",
    justify: "space-between",
    className: "message"
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", {
    className: "iconfont icon-phonedianhua i-bg-diss"
  }), "\u62D2\u7EDD")), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("i", {
    className: "iconfont icon-phone2 i-bg-acp"
  }), "\u63A5\u542C")))));
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