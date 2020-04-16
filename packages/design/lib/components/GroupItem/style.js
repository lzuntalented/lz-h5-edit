"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _action = require("../../store/action");

var _SettingPosition = _interopRequireDefault(require("../SettingPosition"));

require("./style.scss");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TextStyle = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(TextStyle, _React$Component);

  var _super = _createSuper(TextStyle);

  function TextStyle() {
    var _this;

    (0, _classCallCheck2["default"])(this, TextStyle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (e) {
      var _this$props = _this.props,
          dispatch = _this$props.dispatch,
          activeEditKey = _this$props.activeEditKey;
      dispatch((0, _action.changeAttrs)({
        fontSize: +e
      }, activeEditKey));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeColor", function (e) {
      var _this$props2 = _this.props,
          dispatch = _this$props2.dispatch,
          activeEditKey = _this$props2.activeEditKey;
      dispatch((0, _action.changeAttrs)({
        color: e
      }, activeEditKey));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeAttr", function (key) {
      return function (e) {
        var target = e.target;
        var value = e;

        if (target) {
          value = +target.value;
        }

        var _this$props3 = _this.props,
            dispatch = _this$props3.dispatch,
            activeEditKey = _this$props3.activeEditKey;
        dispatch((0, _action.changeAttrs)((0, _defineProperty2["default"])({}, key, value), activeEditKey));
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setBaseStyle", function (key) {
      return function (e) {
        var _this$props4 = _this.props,
            dispatch = _this$props4.dispatch,
            activeEditKey = _this$props4.activeEditKey;
        var target = e.target;
        var value = e;

        if (target) {
          value = +target.value;
        }

        dispatch((0, _action.changeBaseStyle)((0, _defineProperty2["default"])({}, key, value), activeEditKey));
      };
    });
    return _this;
  }

  (0, _createClass2["default"])(TextStyle, [{
    key: "render",
    value: function render() {
      var activeEditKey = this.props.activeEditKey;
      if (!activeEditKey || activeEditKey.length < 0) return /*#__PURE__*/_react["default"].createElement("div", null, "no style");
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "component-groupitem-style-container"
      }, /*#__PURE__*/_react["default"].createElement(_SettingPosition["default"], (0, _extends2["default"])({}, this.props, {
        setBaseStyle: this.setBaseStyle
      })));
    }
  }]);
  return TextStyle;
}(_react["default"].Component);

(0, _defineProperty2["default"])(TextStyle, "propTypes", {
  dispatch: _propTypes["default"].func.isRequired
});

var mapStateToProps = function mapStateToProps(store) {
  var state = store.toJS();
  var editList = state.editList,
      activeEditKey = state.activeEditKey;
  var result = {
    activeEditKey: activeEditKey
  };

  if (activeEditKey && activeEditKey.length === 1) {
    var item = editList[activeEditKey[0]];
    if (item) return Object.assign(result, item);
  }

  return result;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TextStyle);

exports["default"] = _default;