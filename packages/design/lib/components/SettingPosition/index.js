"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

require("antd/lib/slider/style/css");

var _slider = _interopRequireDefault(require("antd/lib/slider"));

require("antd/lib/input/style/css");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

var _react = _interopRequireDefault(require("react"));

var _constants = require("@lzshow/constants");

var _config = require("./config");

var _action = require("../../store/action");

var alignOptions = (0, _config.getAlignConfig)();

function _default(props) {
  var _props$rect = props.rect,
      rect = _props$rect === void 0 ? {} : _props$rect,
      setBaseStyle = props.setBaseStyle,
      dispatchAction = props.dispatchAction;
  var width = rect.width,
      height = rect.height,
      top = rect.top,
      left = rect.left,
      rotate = rect.rotate;
  var rotateVlaue = +rotate >= 0 ? rotate : +rotate + 360;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_row["default"], {
    align: "middle",
    type: "flex",
    gutter: 6,
    justify: "space-around",
    className: "m-b-8"
  }, alignOptions.map(function (it) {
    return /*#__PURE__*/_react["default"].createElement(_col["default"], {
      key: it.key
    }, /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
      placement: "top",
      title: it.tip
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "cursor-pointer iconfont ".concat(it.icon),
      onClick: dispatchAction((0, _action.changeSingleActiveAlign)(it.key))
    })));
  })), /*#__PURE__*/_react["default"].createElement(_row["default"], {
    align: "middle",
    type: "flex",
    gutter: 8
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, "\u5C3A\u5BF8"), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
    value: width,
    onChange: setBaseStyle(_constants.COMPONENT_STYLE_WIDHT)
  })), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
    value: height,
    onChange: setBaseStyle(_constants.COMPONENT_STYLE_HEIGHT)
  })), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8,
    className: "text-center"
  }, "\u5BBD"), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8,
    className: "text-center"
  }, "\u9AD8")), /*#__PURE__*/_react["default"].createElement(_row["default"], {
    align: "middle",
    type: "flex",
    gutter: 8
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, "\u4F4D\u7F6E"), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
    value: left,
    onChange: setBaseStyle(_constants.COMPONENT_STYLE_LEFT)
  })), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
    value: top,
    onChange: setBaseStyle(_constants.COMPONENT_STYLE_TOP)
  })), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8,
    className: "text-center"
  }, "X"), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8,
    className: "text-center"
  }, "Y")), /*#__PURE__*/_react["default"].createElement(_row["default"], {
    align: "middle",
    type: "flex",
    gutter: 8
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, "\u65CB\u8F6C"), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_slider["default"], {
    min: 0,
    max: 359,
    onChange: setBaseStyle(_constants.COMPONENT_STYLE_ROTATE),
    value: rotateVlaue
  })), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
    value: rotateVlaue || 0,
    onChange: setBaseStyle(_constants.COMPONENT_STYLE_ROTATE)
  }))));
}