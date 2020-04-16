"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/icon/style/css");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _music = _interopRequireDefault(require("../../../../utils/music"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var defaultList = [{
  name: 'John Dreamer - Rise',
  url: 'http://www.lzuntalented.cn/assets/music/rise.mp3'
}, {
  name: '告白之夜',
  url: 'http://www.lzuntalented.cn/assets/music/sweet.mp3'
}, {
  name: 'Jingle Bells(圣诞)',
  url: 'http://www.lzuntalented.cn/assets/music/chirmis.m4a'
}, {
  name: '大哥 - 迷人的危险 (女生烟嗓版)',
  url: 'http://www.lzuntalented.cn/assets/music/mirendeweixian.mp3'
}, {
  name: '兔子牙 - 大田後生仔 (MV版片段)',
  url: 'http://www.lzuntalented.cn/assets/music/datianhoushengzai.mp3'
}, {
  name: '兔子牙 - 悬溺 (片段)',
  url: 'http://www.lzuntalented.cn/assets/music/xuanni.mp3'
}, {
  name: '婚礼进行曲',
  url: 'http://www.lzuntalented.cn/assets/music/hljinxingqu.mp3'
}];

var ImageList = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ImageList, _React$Component);

  var _super = _createSuper(ImageList);

  function ImageList(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ImageList);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onPlay", function (obj) {
      return function () {
        _this.setState({
          play: obj
        });

        _this.musicHandler.setSrc(obj.url);
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onStop", function () {
      _this.setState({
        play: false
      });

      _this.musicHandler.pause();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onItemClick", function (obj) {
      return function () {
        _this.onStop();

        var onSelect = _this.props.onSelect;
        onSelect(obj.url);
      };
    });
    var _props$defaultList = props.defaultList,
        defaultList = _props$defaultList === void 0 ? [] : _props$defaultList;
    _this.state = {
      list: (0, _toConsumableArray2["default"])(defaultList),
      play: false
    };
    _this.musicHandler = new _music["default"]();
    return _this;
  }

  (0, _createClass2["default"])(ImageList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          list = _this$state.list,
          play = _this$state.play;
      return /*#__PURE__*/_react["default"].createElement(_row["default"], {
        className: "music-list"
      }, list.map(function (it) {
        return /*#__PURE__*/_react["default"].createElement(_col["default"], {
          span: 12,
          key: it.url,
          className: "item"
        }, /*#__PURE__*/_react["default"].createElement(_row["default"], {
          type: "flex",
          justify: "space-between"
        }, /*#__PURE__*/_react["default"].createElement(_col["default"], null, it.name), /*#__PURE__*/_react["default"].createElement(_col["default"], null, play && play.url === it.url ? /*#__PURE__*/_react["default"].createElement(_icon["default"], {
          type: "pause-circle",
          onClick: _this2.onStop
        }) : /*#__PURE__*/_react["default"].createElement(_icon["default"], {
          type: "play-circle",
          onClick: _this2.onPlay(it)
        }), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          type: "primary",
          size: "small",
          onClick: _this2.onItemClick(it)
        }, "\u4F7F\u7528"))));
      }));
    }
  }]);
  return ImageList;
}(_react["default"].Component);

exports["default"] = ImageList;
(0, _defineProperty2["default"])(ImageList, "propTypes", {
  defaultList: _propTypes["default"].array.isRequired
});