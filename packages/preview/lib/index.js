"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _reCarousel = _interopRequireDefault(require("re-carousel"));

require("./index.scss");

var _utils = require("@lzshow/utils");

var _core = require("@lzshow/core");

var _music = _interopRequireDefault(require("./music"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Preview = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Preview, _React$PureComponent);

  var _super = _createSuper(Preview);

  function Preview(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Preview);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "prev", function () {
      var current = _this.ref.current;
      current.prev();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "next", function () {
      var current = _this.ref.current;
      current.next();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onTransitionEnd", function (e) {
      var current = e.current;
      var index = current.firstElementChild.getAttribute('data-index');

      _this.setState({
        activePageIndex: +index
      });
    });
    _this.state = {
      activePageIndex: 0,
      lastData: null
    };
    _this.musicHandler = new _utils.Music();
    _this.magicRefs = {};
    _this.ref = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(Preview, [{
    key: "renderComponent",
    value: function renderComponent() {
      var _this$props = this.props,
          data = _this$props.data,
          marginTop = _this$props.marginTop;
      var activePageIndex = this.state.activePageIndex;
      return data.list.map(function (item, index) {
        var style = {
          position: 'relative',
          height: _utils.winSize.height,
          display: 'none',
          overflow: 'hidden',
          marginTop: marginTop
        };
        if (activePageIndex === index) style.display = 'block';
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: index,
          "data-index": index,
          style: style
        }, item.map(function (it, idx) {
          var type = it.type,
              _it$animates = it.animates,
              animates = _it$animates === void 0 ? [] : _it$animates,
              others = (0, _objectWithoutProperties2["default"])(it, ["type", "animates"]);
          var Component = (0, _core.getComponentRenderMap)(type);
          return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({
            show: style.display === 'block',
            animates: (0, _toConsumableArray2["default"])(animates)
          }, others, {
            key: idx
          }));
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.data;
      if (!data) return null;
      var style = {
        backgroundImage: "url(".concat(data.backGroundImage, ")"),
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "content",
        style: style
      }, /*#__PURE__*/_react["default"].createElement(_reCarousel["default"], {
        onTransitionEnd: this.onTransitionEnd,
        axis: "y",
        ref: this.ref
      }, this.renderComponent()), data.backMusicUrl && /*#__PURE__*/_react["default"].createElement(_music["default"], {
        backMusicUrl: data.backMusicUrl
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var lastData = state.lastData;

      if (lastData !== props.data) {
        return Object.assign(state, {
          lastData: props.data
        });
      }

      return null;
    }
  }]);
  return Preview;
}(_react["default"].PureComponent);

(0, _defineProperty2["default"])(Preview, "propTypes", {
  data: _propTypes["default"].object.isRequired
});
var _default = Preview;
exports["default"] = _default;