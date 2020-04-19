"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _Setting = _interopRequireDefault(require("./components/Setting"));

var _PageManage = _interopRequireDefault(require("./components/PageManage"));

var _phone = _interopRequireDefault(require("./phone"));

var _Control = _interopRequireDefault(require("./components/Control"));

var _AideLine = _interopRequireDefault(require("./components/AideLine"));

var _Resource = _interopRequireDefault(require("./components/Resource"));

var _Preview = _interopRequireDefault(require("./components/Preview"));

var _Header = _interopRequireDefault(require("./components/Header"));

var _event = _interopRequireDefault(require("./core/event"));

require("./index.scss");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Home = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Home);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showPreview", function () {
      _this.setState({
        showPreview: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "hidePreview", function () {
      _this.setState({
        showPreview: false
      });
    });
    _this.state = {
      showPreview: false,
      height: window.innerHeight
    };
    _this.eventHandler = (0, _event["default"])();
    return _this;
  }

  (0, _createClass2["default"])(Home, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.eventHandler();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          showPreview = _this$state.showPreview,
          height = _this$state.height;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "home-container",
        style: {
          height: height
        }
      }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
        showPreview: this.showPreview
      }), /*#__PURE__*/_react["default"].createElement(_row["default"], {
        type: "flex",
        justify: "center",
        align: "middle",
        className: "home-edit-area",
        style: {
          height: height - 48
        }
      }, /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "phone-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "header"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "content"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "border-left"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "border-right"
      }), /*#__PURE__*/_react["default"].createElement(_phone["default"], {
        id: this.id
      })), /*#__PURE__*/_react["default"].createElement(_AideLine["default"], null), /*#__PURE__*/_react["default"].createElement(_Control["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "footer"
      })))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "style-setting-container"
      }, /*#__PURE__*/_react["default"].createElement(_Setting["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "page-manage-container"
      }, /*#__PURE__*/_react["default"].createElement(_PageManage["default"], null)), /*#__PURE__*/_react["default"].createElement(_Resource["default"], null), showPreview && /*#__PURE__*/_react["default"].createElement(_Preview["default"], {
        visible: showPreview,
        hidePreview: this.hidePreview
      }));
    }
  }]);
  return Home;
}(_react["default"].Component);

var _default = Home;
exports["default"] = _default;