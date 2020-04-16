"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactColor = require("react-color");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ColorPciker = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ColorPciker, _React$Component);

  var _super = _createSuper(ColorPciker);

  function ColorPciker() {
    var _this;

    (0, _classCallCheck2["default"])(this, ColorPciker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      color: ''
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onColorChange", function (color) {
      var hex = color.hex;

      _this.props.onChange(hex);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderTitle", function () {
      var color = _this.props.color;
      return /*#__PURE__*/_react["default"].createElement(_reactColor.ChromePicker, {
        color: color,
        onChangeComplete: _this.onColorChange
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(ColorPciker, [{
    key: "render",
    value: function render() {
      var color = this.props.color;
      var style = {
        background: color,
        width: '100%',
        height: 32,
        border: '1px solid #cacaca'
      };
      return /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
        title: this.renderTitle,
        trigger: "click"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: style
      }));
    }
  }]);
  return ColorPciker;
}(_react["default"].Component);

exports["default"] = ColorPciker;