"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

require("antd/lib/popover/style/css");

var _popover = _interopRequireDefault(require("antd/lib/popover"));

require("antd/lib/icon/style/css");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

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

var _action = require("../../store/action");

var _LevelManage = _interopRequireDefault(require("../LevelManage"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TabPane = _tabs["default"].TabPane;

var PageManage = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(PageManage, _React$Component);

  var _super = _createSuper(PageManage);

  function PageManage() {
    var _this;

    (0, _classCallCheck2["default"])(this, PageManage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onAddPage", function () {
      var dispatch = _this.props.dispatch;
      dispatch((0, _action.addPage)());
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onCopy", function (e) {
      e.stopPropagation();
      var dispatch = _this.props.dispatch;
      dispatch((0, _action.copyPage)());
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onDelete", function (e) {
      e.stopPropagation();
      var dispatch = _this.props.dispatch;
      dispatch((0, _action.deletePage)());
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "changePage", function (pageIndex) {
      return function () {
        var dispatch = _this.props.dispatch;
        dispatch((0, _action.changeActivePage)(pageIndex));
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onItemMoveUp", function (e) {
      e.stopPropagation();
      var dispatch = _this.props.dispatch;
      dispatch((0, _action.movePageToUp)());
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onItemMoveDown", function (e) {
      e.stopPropagation();
      var dispatch = _this.props.dispatch;
      dispatch((0, _action.movePageToDown)());
    });
    return _this;
  }

  (0, _createClass2["default"])(PageManage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          pages = _this$props.pages,
          activePage = _this$props.activePage;
      return /*#__PURE__*/_react["default"].createElement(_reactDraggable["default"], {
        axis: "both",
        handle: ".component-page-manage-container > .header",
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
        className: "component-page-manage-container"
      }, /*#__PURE__*/_react["default"].createElement("header", {
        className: "header"
      }, "\u9875\u9762\u7BA1\u7406"), /*#__PURE__*/_react["default"].createElement(_tabs["default"], {
        className: "tabs-content"
      }, /*#__PURE__*/_react["default"].createElement(TabPane, {
        tab: "\u9875\u9762",
        key: "1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "content"
      }, pages.map(function (it, index) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: index,
          onClick: _this2.changePage(index),
          className: activePage === index ? 'page-item active' : 'page-item'
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "index"
        }, index + 1), /*#__PURE__*/_react["default"].createElement("div", {
          className: "describe"
        }, /*#__PURE__*/_react["default"].createElement(_row["default"], {
          type: "flex",
          justify: "space-between"
        }, /*#__PURE__*/_react["default"].createElement(_col["default"], null, "\u7B2C".concat(index + 1, "\u9875")), activePage === index && /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement(_popover["default"], {
          placement: "bottom",
          trigger: "click",
          overlayClassName: "popover-comp-pagemanage-move",
          content: /*#__PURE__*/_react["default"].createElement("div", null, index > 0 && /*#__PURE__*/_react["default"].createElement("div", {
            className: "m-b-4"
          }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
            onClick: _this2.onItemMoveUp,
            size: "small"
          }, "\u4E0A\u79FB")), index < pages.length - 1 && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_button["default"], {
            onClick: _this2.onItemMoveDown,
            size: "small"
          }, "\u4E0B\u79FB"))),
          title: "Title"
        }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
          className: "m-r-8",
          type: "dash"
        })), /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
          placement: "top",
          title: "\u590D\u5236\u9875\u9762"
        }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
          onClick: _this2.onCopy,
          type: "copy",
          alt: "\u590D\u5236\u9875\u9762"
        })), pages.length > 1 && /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
          placement: "top",
          title: "\u5220\u9664\u9875\u9762"
        }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
          className: "delete",
          onClick: _this2.onDelete,
          type: "delete",
          alt: "\u5220\u9664\u9875\u9762"
        }))))));
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "text-center m-t-8"
      }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
        onClick: this.onAddPage,
        type: "primary"
      }, "\u65B0\u589E\u9875\u9762")))), /*#__PURE__*/_react["default"].createElement(TabPane, {
        tab: "\u56FE\u5C42",
        key: "2"
      }, /*#__PURE__*/_react["default"].createElement(_LevelManage["default"], null)))));
    }
  }]);
  return PageManage;
}(_react["default"].Component);

var mapStateToProps = function mapStateToProps(store) {
  var state = store.toJS();
  var pages = state.pages,
      activePage = state.activePage;
  var result = {
    pages: pages,
    activePage: activePage
  };
  return result;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PageManage);

exports["default"] = _default;