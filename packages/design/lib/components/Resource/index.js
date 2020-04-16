"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/card/style/css");

var _card = _interopRequireDefault(require("antd/lib/card"));

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/menu/style/css");

var _menu = _interopRequireDefault(require("antd/lib/menu"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _action = require("../../store/action");

var _Node = _interopRequireDefault(require("./components/Node"));

var _Scene = _interopRequireDefault(require("./components/Scene"));

var _TabsMap;

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TAB_KEY_NODE = 'TAB_KEY_NODE';
var TAB_KEY_SCENE = 'TAB_KEY_SCENE';
var TabsMap = (_TabsMap = {}, (0, _defineProperty2["default"])(_TabsMap, TAB_KEY_NODE, _Node["default"]), (0, _defineProperty2["default"])(_TabsMap, TAB_KEY_SCENE, _Scene["default"]), _TabsMap);

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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      currentMenu: TAB_KEY_NODE
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onAddComponent", function (key) {
      return function () {
        var dispatch = _this.props.dispatch;
        dispatch((0, _action.addPageItem)(key));
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onAddComponentWithSize", function (key, size) {
      return function () {
        var dispatch = _this.props.dispatch;
        dispatch((0, _action.addPageItemWithSize)(key, size));
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onAddComponentWithAttrs", function (key, attrs) {
      return function () {
        var dispatch = _this.props.dispatch;
        dispatch((0, _action.addPageItemWithAttrs)(key, attrs));
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClickTpl", function (store) {
      return function () {
        var dispatch = _this.props.dispatch;
        dispatch((0, _action.initStore)(store));
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeMenu", function (_ref) {
      var key = _ref.key;

      _this.setState({
        currentMenu: key
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Setting, [{
    key: "render",
    value: function render() {
      var currentMenu = this.state.currentMenu;
      var Comp = TabsMap[currentMenu];
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "resource"
      }, /*#__PURE__*/_react["default"].createElement(_card["default"], {
        title: "\u7269\u6599\u4ED3\u5E93",
        bordered: true
      }, /*#__PURE__*/_react["default"].createElement(_row["default"], {
        type: "flex",
        className: "height100"
      }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
        className: "left-memu"
      }, /*#__PURE__*/_react["default"].createElement(_menu["default"], {
        defaultSelectedKeys: [currentMenu],
        onClick: this.onChangeMenu
      }, /*#__PURE__*/_react["default"].createElement(_menu["default"].Item, {
        key: TAB_KEY_NODE
      }, "\u5143\u7D20\u6A21\u677F"), /*#__PURE__*/_react["default"].createElement(_menu["default"].Item, {
        key: TAB_KEY_SCENE
      }, "\u573A\u666F\u6A21\u677F"))), /*#__PURE__*/_react["default"].createElement(_col["default"], {
        className: "right-list"
      }, /*#__PURE__*/_react["default"].createElement(Comp, {
        onAddComponentWithAttrs: this.onAddComponentWithAttrs,
        onAddComponentWithSize: this.onAddComponentWithSize,
        onAddComponent: this.onAddComponent,
        onClickTpl: this.onClickTpl
      })))));
    }
  }]);
  return Setting;
}(_react["default"].Component);

var mapStateToProps = function mapStateToProps() {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Setting);

exports["default"] = _default;