"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _cropperjs = _interopRequireDefault(require("cropperjs"));

require("cropperjs/dist/cropper.min.css");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ImageClip = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ImageClip, _React$Component);

  var _super = _createSuper(ImageClip);

  function ImageClip(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ImageClip);
    _this = _super.call(this, props);
    _this.imgRef = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(ImageClip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initCropper();
    }
  }, {
    key: "getCropData",
    value: function getCropData() {
      if (this.mCropper) {
        return this.mCropper.getData();
      }

      return null;
    }
  }, {
    key: "initCropper",
    value: function initCropper() {
      var handler = this.imgRef;

      if (handler && handler.current) {
        this.mCropper = new _cropperjs["default"](handler.current, {
          aspectRatio: 2 / 3,
          // 默认比例
          movable: false,
          // 是否允许移动图片
          dragCrop: true,
          // 是否允许移除当前的剪裁框，并通过拖动来新建一个剪裁框区域
          zoomable: false,
          mouseWheelZoom: false,
          autoCropArea: 1,
          checkCrossOrigin: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var src = this.props.src;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 320,
          display: 'flex',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/_react["default"].createElement("img", {
        ref: this.imgRef,
        src: src,
        alt: "\u56FE\u7247\u52A0\u8F7D\u5931\u8D25",
        height: "100%"
      }));
    }
  }]);
  return ImageClip;
}(_react["default"].Component);

var _default = ImageClip;
exports["default"] = _default;