"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var refNames = {
  editDom: 'editDom'
};

var Text = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Text, _React$Component);

  var _super = _createSuper(Text);

  function Text(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Text);
    _this = _super.call(this, props); // props.registerAttrs(defaultAttrs);

    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      editable: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "magicRefs", {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onDoubleClick", function () {
      var elem = _this.magicRefs.editDom;

      _this.setState({
        editable: true
      }, function () {
        elem.focus();
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onBlur", function () {
      _this.focusAble = false;

      _this.setState({
        editable: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onFocus", function () {
      _this.focusAble = true;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onInput", function (e) {
      if (_this.compostionStartFlag) return;
      var _this$props = _this.props,
          resetHeight = _this$props.resetHeight,
          setAttribute = _this$props.setAttribute; // console.log(e.target.textContent);

      resetHeight();
      setAttribute({
        text: e.target.innerHTML
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onCompositionStart", function () {
      _this.compostionStartFlag = true;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onCompositionEnd", function (e) {
      _this.compostionStartFlag = false;

      _this.onInput(e);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onMouseDown", function (e) {
      if (_this.focusAble) {
        e.stopPropagation();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setMagicRefs", function (name) {
      return function (r) {
        _this.magicRefs[name] = r;
      };
    });
    _this.focusAble = false;
    return _this;
  }

  (0, _createClass2["default"])(Text, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.componentDidUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var handler = this.magicRefs[refNames.editDom];
      var text = this.props.text; // 此处做法有待研究，不完美

      if (handler) {
        // 如果文本内容为空，取已设置的内容填充
        var currentText = handler.innerHTML;

        if (currentText.trim() === '' || currentText !== text) {
          handler.innerHTML = text;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var editable = this.state.editable;
      var _this$props2 = this.props,
          resetHeight = _this$props2.resetHeight,
          setAttribute = _this$props2.setAttribute,
          text = _this$props2.text,
          bgColor = _this$props2.bgColor,
          textShadowX = _this$props2.textShadowX,
          textShadowY = _this$props2.textShadowY,
          textShadowSpread = _this$props2.textShadowSpread,
          textShadowColor = _this$props2.textShadowColor,
          textSolidSize = _this$props2.textSolidSize,
          textSolidColor = _this$props2.textSolidColor,
          textSolidAngle = _this$props2.textSolidAngle,
          textBorderSize = _this$props2.textBorderSize,
          textBorderColor = _this$props2.textBorderColor,
          others = (0, _objectWithoutProperties2["default"])(_this$props2, ["resetHeight", "setAttribute", "text", "bgColor", "textShadowX", "textShadowY", "textShadowSpread", "textShadowColor", "textSolidSize", "textSolidColor", "textSolidAngle", "textBorderSize", "textBorderColor"]);
      var textShadow = (0, _utils.generatorTexttextShadow)({
        textShadowX: textShadowX,
        textShadowY: textShadowY,
        textShadowSpread: textShadowSpread,
        textShadowColor: textShadowColor,
        textSolidSize: textSolidSize,
        textSolidColor: textSolidColor,
        textSolidAngle: textSolidAngle,
        textBorderSize: textBorderSize,
        textBorderColor: textBorderColor
      });
      var style = Object.assign({
        width: '100%',
        padding: 10,
        background: bgColor,
        outerColor: 'transport',
        textShadow: textShadow
      }, others);
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style,
        contentEditable: editable,
        onDoubleClick: this.onDoubleClick,
        onCompositionStart: this.onCompositionStart,
        onCompositionEnd: this.onCompositionEnd,
        onBlur: this.onBlur,
        ref: this.setMagicRefs(refNames.editDom),
        onInput: this.onInput,
        onFocus: this.onFocus,
        onMouseDown: this.onMouseDown
      });
    }
  }]);
  return Text;
}(_react["default"].Component);

(0, _defineProperty2["default"])(Text, "propTypes", {
  registerAttrs: _propTypes["default"].func.isRequired,
  resetHeight: _propTypes["default"].func.isRequired,
  setAttribute: _propTypes["default"].func.isRequired,
  text: _propTypes["default"].string,
  bgColor: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Text, "defaultProps", {
  text: '',
  bgColor: ''
});
var _default = Text;
exports["default"] = _default;