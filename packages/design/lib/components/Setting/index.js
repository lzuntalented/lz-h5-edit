"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/collapse/style/css");

var _collapse = _interopRequireDefault(require("antd/lib/collapse"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/lib/tabs/style/css");

var _tabs = _interopRequireDefault(require("antd/lib/tabs"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

require("./index.scss");

var _core = require("@lzshow/core");

var _action = require("../../store/action");

var _animate = _interopRequireDefault(require("./components/animate"));

var _attribute = _interopRequireDefault(require("./components/attribute"));

var _SettingPosition = _interopRequireDefault(require("../SettingPosition"));

var _border = _interopRequireDefault(require("./components/border"));

var _MutilAttribute = _interopRequireDefault(require("./components/MutilAttribute"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TabPane = _tabs["default"].TabPane;

var Setting = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Setting, _React$Component);

  var _super = _createSuper(Setting);

  function Setting() {
    var _this;

    (0, _classCallCheck2["default"])(this, Setting);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onAnimateChange", function (e) {
      var _this$props = _this.props,
          activeEditKey = _this$props.activeEditKey,
          dispatch = _this$props.dispatch;
      dispatch((0, _action.changeBaseStyle)({
        animate: e
      }, activeEditKey));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onRemove", function () {
      var dispatch = _this.props.dispatch;
      dispatch((0, _action.removeItem)());
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setBaseStyle", function (key) {
      return function (e) {
        var _this$props2 = _this.props,
            dispatch = _this$props2.dispatch,
            activeEditKey = _this$props2.activeEditKey;
        var target = e.target;
        var value = e;

        if (target) {
          value = +target.value;
        }

        dispatch((0, _action.changeBaseStyle)((0, _defineProperty2["default"])({}, key, value), activeEditKey));
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setBorder", function (key) {
      return function (e) {
        var _this$props3 = _this.props,
            dispatch = _this$props3.dispatch,
            activeEditKey = _this$props3.activeEditKey;
        var target = e.target;
        var value = e;

        if (target) {
          value = +target.value;
        }

        dispatch((0, _action.changeItemBorder)(activeEditKey, (0, _defineProperty2["default"])({}, key, value)));
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "dispatchAction", function (action) {
      return function () {
        var dispatch = _this.props.dispatch;
        dispatch(action);
      };
    });
    return _this;
  }

  (0, _createClass2["default"])(Setting, [{
    key: "renderComponent",
    value: function renderComponent() {
      var _this$props4 = this.props,
          componentType = _this$props4.componentType,
          activeEditKey = _this$props4.activeEditKey;
      var styleConfig = (0, _core.getComponentStyleMap)(componentType);

      if (styleConfig) {
        return /*#__PURE__*/_react["default"].createElement(_attribute["default"], {
          styleConfig: styleConfig
        });
      }

      if (activeEditKey && activeEditKey.length > 1) {
        return /*#__PURE__*/_react["default"].createElement(_MutilAttribute["default"], null);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          activeEditKey = _this$props5.activeEditKey,
          item = _this$props5.item;
      return activeEditKey && activeEditKey.length > 0 && /*#__PURE__*/_react["default"].createElement(_reactDraggable["default"], {
        axis: "both",
        handle: ".component-setting-container > .header",
        defaultPosition: {
          x: 0,
          y: 0
        },
        position: null,
        grid: [25, 25],
        scale: 1,
        onStart: this.handleStart,
        onDrag: this.handleDrag,
        onStop: this.handleStop
      }, /*#__PURE__*/_react["default"].createElement("section", {
        className: "component-setting-container"
      }, /*#__PURE__*/_react["default"].createElement("header", {
        className: "header"
      }, "\u7EC4\u4EF6\u8BBE\u7F6E"), /*#__PURE__*/_react["default"].createElement(_tabs["default"], {
        className: "tabs-content",
        defaultActiveKey: "1"
      }, /*#__PURE__*/_react["default"].createElement(TabPane, {
        tab: "\u6837\u5F0F",
        key: "1"
      }, this.renderComponent(), /*#__PURE__*/_react["default"].createElement(_collapse["default"], null, /*#__PURE__*/_react["default"].createElement(_collapse["default"].Panel, {
        header: "\u8FB9\u6846",
        key: "1"
      }, item && /*#__PURE__*/_react["default"].createElement(_border["default"], (0, _extends2["default"])({}, item, {
        setBorder: this.setBorder
      }))), /*#__PURE__*/_react["default"].createElement(_collapse["default"].Panel, {
        header: "\u4F4D\u7F6E\u4E0E\u5C3A\u5BF8",
        key: "3"
      }, item && /*#__PURE__*/_react["default"].createElement(_SettingPosition["default"], (0, _extends2["default"])({}, item, {
        dispatchAction: this.dispatchAction,
        setBaseStyle: this.setBaseStyle
      })))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "text-center m-t-12 m-b-12"
      }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
        onClick: this.onRemove,
        type: "danger"
      }, "\u5220\u9664\u5143\u7D20"))), activeEditKey.length === 1 && /*#__PURE__*/_react["default"].createElement(TabPane, {
        tab: "\u52A8\u753B",
        key: "2"
      }, /*#__PURE__*/_react["default"].createElement(_animate["default"], null)))));
    }
  }]);
  return Setting;
}(_react["default"].Component);

var mapStateToProps = function mapStateToProps(store) {
  var state = store.toJS();
  var editList = state.editList,
      activeEditKey = state.activeEditKey;
  var result = {
    activeEditKey: activeEditKey
  };

  if (activeEditKey && activeEditKey.length === 1) {
    var item = editList[activeEditKey[0]];
    if (item) return Object.assign(result, {
      componentType: item.type,
      item: item
    });
  }

  return result;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Setting);

exports["default"] = _default;