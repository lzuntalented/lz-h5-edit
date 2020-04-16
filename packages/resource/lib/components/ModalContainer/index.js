"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/modal/style/css");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/menu/style/css");

var _menu = _interopRequireDefault(require("antd/lib/menu"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

require("./index.scss");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ModalContainer = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ModalContainer, _React$Component);

  var _super = _createSuper(ModalContainer);

  function ModalContainer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ModalContainer);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSelect", function (_ref) {
      var key = _ref.key;

      _this.setState({
        selectKeys: [key]
      });
    });
    var options = props.options;
    _this.state = {
      defaultKeys: [options[0].title],
      selectKeys: [options[0].title]
    };
    return _this;
  }

  (0, _createClass2["default"])(ModalContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          options = _this$props.options,
          children = _this$props.children,
          className = _this$props.className,
          others = (0, _objectWithoutProperties2["default"])(_this$props, ["options", "children", "className"]);
      var _this$state = this.state,
          defaultKeys = _this$state.defaultKeys,
          selectKeys = _this$state.selectKeys;
      return /*#__PURE__*/_react["default"].createElement(_modal["default"], (0, _extends2["default"])({}, others, {
        footer: null,
        closable: true,
        className: "component-modal-container ".concat(className),
        width: 960
      }), /*#__PURE__*/_react["default"].createElement(_row["default"], {
        type: "flex",
        justify: "space-between"
      }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
        className: "nav"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "title"
      }, others.title), /*#__PURE__*/_react["default"].createElement(_menu["default"], {
        theme: "dark",
        onSelect: this.onSelect,
        defaultSelectedKeys: defaultKeys
      }, options.map(function (it) {
        return /*#__PURE__*/_react["default"].createElement(_menu["default"].Item, {
          key: it.title
        }, it.title);
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "extra"
      }, children)), /*#__PURE__*/_react["default"].createElement(_col["default"], {
        className: "right"
      }, options.map(function (it) {
        var style = {
          display: 'none',
          height: '100%'
        };

        if (selectKeys.indexOf(it.title) > -1) {
          style.display = 'block';
        }

        return /*#__PURE__*/_react["default"].createElement("div", {
          key: it.title,
          style: style
        }, it.comp);
      }))));
    }
  }]);
  return ModalContainer;
}(_react["default"].Component);

exports["default"] = ModalContainer;