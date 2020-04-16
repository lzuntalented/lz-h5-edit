"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/modal/style/css");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _cropperjs = _interopRequireDefault(require("cropperjs"));

require("cropperjs/dist/cropper.min.css");

var _ImageClip = _interopRequireDefault(require("./ImageClip"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ImageClip = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ImageClip, _React$Component);

  var _super = _createSuper(ImageClip);

  function ImageClip(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ImageClip);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleCancel", function () {
      var changeVisible = _this.props.changeVisible;
      changeVisible();

      _this.setState({
        showImageClip: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOk", function () {
      var _this$props = _this.props,
          changeVisible = _this$props.changeVisible,
          src = _this$props.src,
          onChangeBackground = _this$props.onChangeBackground,
          cropImage = _this$props.cropImage;
      var handler = _this.imgRef.current;

      if (handler) {
        var data = handler.getCropData(); // console.log(data);

        cropImage(_objectSpread({}, data, {
          url: src
        })).then(function (res) {
          onChangeBackground(res);
          changeVisible();
        })["catch"](function () {
          _modal["default"].error('操作失败');
        });
      }
    });
    _this.imgRef = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(ImageClip, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          visible = _this$props2.visible,
          src = _this$props2.src;
      return /*#__PURE__*/_react["default"].createElement(_modal["default"], {
        title: "\u9009\u62E9\u80CC\u666F\u56FE\u7247",
        visible: visible,
        onOk: this.handleOk,
        onCancel: this.handleCancel,
        okText: "\u786E\u5B9A",
        cancelText: "\u53D6\u6D88",
        destroyOnClose: true
      }, /*#__PURE__*/_react["default"].createElement(_ImageClip["default"], {
        ref: this.imgRef,
        src: src
      }));
    }
  }]);
  return ImageClip;
}(_react["default"].Component);

var _default = ImageClip;
exports["default"] = _default;