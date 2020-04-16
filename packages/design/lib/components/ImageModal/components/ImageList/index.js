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

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lazyImage = _interopRequireDefault(require("./lazyImage"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ImageList = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ImageList, _React$Component);

  var _super = _createSuper(ImageList);

  function ImageList(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ImageList);
    _this = _super.call(this, props);
    var _props$defaultPicture = props.defaultPicture,
        defaultPicture = _props$defaultPicture === void 0 ? [] : _props$defaultPicture;
    _this.state = {
      list: (0, _toConsumableArray2["default"])(defaultPicture)
    };
    return _this;
  }

  (0, _createClass2["default"])(ImageList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refresh();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$defaultPi = _this$props.defaultPicture,
          defaultPicture = _this$props$defaultPi === void 0 ? [] : _this$props$defaultPi,
          fetchPicture = _this$props.fetchPicture;

      if (fetchPicture) {
        fetchPicture().then(function (res) {
          _this2.setState({
            list: (0, _toConsumableArray2["default"])(defaultPicture).concat(res)
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var onAddPicture = this.props.onAddPicture;
      var list = this.state.list;
      return /*#__PURE__*/_react["default"].createElement(_row["default"], {
        type: "flex",
        className: "image-list",
        justify: "space-around"
      }, list.map(function (it) {
        return /*#__PURE__*/_react["default"].createElement(_col["default"], {
          key: it,
          className: "item",
          onClick: onAddPicture(it)
        }, /*#__PURE__*/_react["default"].createElement(_lazyImage["default"], {
          width: "95%",
          src: it,
          alt: ""
        }));
      }), /*#__PURE__*/_react["default"].createElement("i", {
        className: "i"
      }), /*#__PURE__*/_react["default"].createElement("i", {
        className: "i"
      }), /*#__PURE__*/_react["default"].createElement("i", {
        className: "i"
      }), /*#__PURE__*/_react["default"].createElement("i", {
        className: "i"
      }));
    }
  }]);
  return ImageList;
}(_react["default"].Component);

exports["default"] = ImageList;
(0, _defineProperty2["default"])(ImageList, "propTypes", {
  defaultPicture: _propTypes["default"].array.isRequired,
  fetchPicture: _propTypes["default"].func.isRequired,
  onAddPicture: _propTypes["default"].func.isRequired
});