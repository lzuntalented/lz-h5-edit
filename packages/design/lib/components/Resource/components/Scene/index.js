"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@lzshow/core");

var _utils = require("../../../../utils");

var _config = require("../../../../core/config");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var RealPreview = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(RealPreview, _React$Component);

  var _super = _createSuper(RealPreview);

  function RealPreview(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RealPreview);
    _this = _super.call(this, props);
    _this.state = {
      list: (0, _config.getLocalTplDatas)()
    };
    return _this;
  }

  (0, _createClass2["default"])(RealPreview, [{
    key: "renderComponent",
    value: function renderComponent(data) {
      var onClickTpl = this.props.onClickTpl;
      var content = data.content,
          id = data.id,
          origin = data.origin;
      var height = _utils.winSize.height;
      var list = content.list,
          backGroundImage = content.backGroundImage;
      var style = {
        backgroundImage: "url(".concat(backGroundImage, ")"),
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: height,
        transform: 'scale(0.8)'
      };
      var item = list[0];
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: id,
        className: "scene-content",
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: 'relative'
        }
      }, item.map(function (it, idx) {
        var type = it.type,
            others = (0, _objectWithoutProperties2["default"])(it, ["type"]);
        others.animate = {};
        var Component = (0, _core.getComponentRenderMap)(type);
        return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, others, {
          key: idx
        }));
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mask"
      }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
        onClick: onClickTpl(origin),
        size: "large",
        type: "primary"
      }, "\u4F7F\u7528\u6B64\u573A\u666F")));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var list = this.state.list;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "scene"
      }, list.map(function (it) {
        return _this2.renderComponent(it);
      }));
    }
  }]);
  return RealPreview;
}(_react["default"].Component);

var _default = RealPreview;
exports["default"] = _default;