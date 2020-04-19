"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/icon/style/css");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _hotkeysJs = _interopRequireDefault(require("hotkeys-js"));

require("./index.scss");

var _utils = require("@lzshow/utils");

var _constants = require("@lzshow/constants");

var _action = require("../../store/action");

var _LocalStorage = _interopRequireDefault(require("../../utils/LocalStorage"));

var _ImageModal = _interopRequireDefault(require("../ImageModal"));

var _MusicModal = _interopRequireDefault(require("../MusicModal"));

var _config = require("./config");

var _HistoryStore = _interopRequireDefault(require("../../utils/HistoryStore"));

var _utils2 = require("../../utils");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Header = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Header);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onAddText", function () {
      var dispatch = _this.props.dispatch;
      dispatch((0, _action.addPageItem)(_constants.COMPONENT_TYPE_TEXT));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onAddPicture", function () {
      _this.setState({
        showPictureModal: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onAddComponent", function (key) {
      return function () {
        var dispatch = _this.props.dispatch;
        dispatch((0, _action.addPageItem)(key));
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onPreview", function () {
      var _this$props = _this.props,
          showPreview = _this$props.showPreview,
          state = _this$props.state;

      _this.mLzLocalStorage.set(_constants.LOCALSTORAGE_PREVIEW_CHACHE, state);

      showPreview();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onPublish", function () {
      var state = _this.props.state;
      var content = (0, _utils2.deleteUnUseObject)(state);

      if (!content) {
        _modal["default"].error({
          title: '发布失败',
          content: '请在场景中添加物料，以丰富内容'
        });

        return;
      }

      var config = _this.props.config;

      var _ref = config || {},
          pub = _ref.onPublish;

      if ((0, _utils.isFunction)(pub)) {
        pub(content);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeVisible", function (flag) {
      return function () {
        _this.setState({
          modelImageClipVisible: flag
        });
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeModalMusicVisible", function (flag) {
      return function () {
        _this.setState({
          showMusicModal: flag,
          withCrop: false
        });
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeModalBgVisible", function (flag) {
      return function () {
        _this.setState({
          showPictureModal: flag,
          withCrop: true
        });
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeBackground", function (src) {
      var dispatch = _this.props.dispatch;
      dispatch((0, _action.changeBackGround)(src));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onModalCancel", function (key) {
      return function () {
        _this.setState((0, _defineProperty2["default"])({}, key, false));
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onFileChange", function (_ref2) {
      var file = _ref2.file;

      if (file.status !== 'uploading') {
        if (file.status === 'done') {
          var current = _this.imageListRef.current;

          if (current) {
            current.refresh();
          }

          var cur = _this.imageBgListRef.current;

          if (cur) {
            cur.refresh();
          }
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeMusic", function (src) {
      _this.setState({
        showMusicModal: false
      });

      var dispatch = _this.props.dispatch;
      dispatch((0, _action.changeBackMusicUrl)(src));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onUndo", function () {
      var store = _HistoryStore["default"].undo();

      if (store) {
        var dispatch = _this.props.dispatch;
        dispatch((0, _action.initHistoryStore)(store));
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onRedo", function () {
      var store = _HistoryStore["default"].redo();

      if (store) {
        var dispatch = _this.props.dispatch;
        dispatch((0, _action.initHistoryStore)(store));
      }
    });
    _this.mLzLocalStorage = new _LocalStorage["default"](_constants.LOCALSTORAGE_PREVIEW_NAMESPACE);
    _this.state = {
      // 背景图片裁剪
      modelImageClipVisible: false,
      // 音乐选择
      modalMusicVisible: false,
      showPictureModal: false,
      showMusicModal: false,
      showBgChoseModal: false,
      currentClipImage: null
    };
    _this.uploadProps = (0, _config.getUploadProps)();
    _this.imageBgListRef = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _hotkeysJs["default"])('ctrl+z', this.onUndo);
      (0, _hotkeysJs["default"])('ctrl+shift+z', this.onRedo);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _hotkeysJs["default"].unbind('ctrl+z');

      _hotkeysJs["default"].unbind('ctrl+shift+z');
    }
  }, {
    key: "render",
    value: function render() {
      var dispatch = this.props.dispatch;
      var _this$state = this.state,
          modelImageClipVisible = _this$state.modelImageClipVisible,
          withCrop = _this$state.withCrop,
          showPictureModal = _this$state.showPictureModal,
          showMusicModal = _this$state.showMusicModal,
          showBgChoseModal = _this$state.showBgChoseModal,
          currentClipImage = _this$state.currentClipImage;
      return /*#__PURE__*/_react["default"].createElement("section", {
        className: "page-header-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "example-container"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        onClick: function onClick() {
          window.location.hash = '/';
        },
        src: "http://www.lzuntalented.cn/img/heart-logo.png",
        alt: "",
        height: "48"
      })), /*#__PURE__*/_react["default"].createElement("ul", {
        className: "ul-comp"
      }, /*#__PURE__*/_react["default"].createElement("li", {
        className: "item",
        onClick: this.onUndo
      }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
        type: "undo",
        className: "icon"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "txt"
      }, "\u64A4\u9500")), /*#__PURE__*/_react["default"].createElement("li", {
        className: "item",
        onClick: this.onRedo
      }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
        type: "redo",
        className: "icon"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "txt"
      }, "\u91CD\u505A")), /*#__PURE__*/_react["default"].createElement("li", {
        className: "item",
        onClick: this.onAddText
      }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
        type: "border-inner",
        className: "icon"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "txt"
      }, "\u6587\u672C")), /*#__PURE__*/_react["default"].createElement("li", {
        className: "item",
        onClick: this.onAddPicture
      }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
        type: "picture",
        className: "icon"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "txt"
      }, "\u56FE\u7247")), /*#__PURE__*/_react["default"].createElement("li", {
        className: "item",
        onClick: this.onChangeModalBgVisible(true)
      }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
        type: "qrcode",
        className: "icon"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "txt"
      }, "\u80CC\u666F")), /*#__PURE__*/_react["default"].createElement("li", {
        className: "item",
        onClick: this.onChangeModalMusicVisible(true)
      }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
        type: "customer-service",
        className: "icon"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "txt"
      }, "\u97F3\u6548")), modelImageClipVisible && /*#__PURE__*/_react["default"].createElement(ImageClip, {
        src: currentClipImage,
        visible: modelImageClipVisible,
        changeVisible: this.onChangeVisible(false),
        dispatch: dispatch,
        onChangeBackground: this.onChangeBackground
      })), /*#__PURE__*/_react["default"].createElement("ul", {
        className: "publish-container"
      }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
        type: "danger",
        onClick: this.onPublish
      }, "\u53D1\u5E03"), /*#__PURE__*/_react["default"].createElement(_button["default"], {
        type: "primary",
        className: "m-r-4",
        onClick: this.onPreview
      }, "\u9884\u89C8"), /*#__PURE__*/_react["default"].createElement("iframe", {
        src: "https://ghbtns.com/github-btn.html?user=lzuntalented&repo=lz-h5-edit&type=star&count=true",
        frameBorder: "0",
        scrolling: "0",
        width: "100px",
        height: "30px",
        className: "m-t-12"
      })), /*#__PURE__*/_react["default"].createElement(_ImageModal["default"], {
        dispatch: dispatch,
        onVisibleChange: this.onModalCancel('showPictureModal'),
        visible: showPictureModal,
        addMode: true,
        withCrop: withCrop,
        onChangeBackground: this.onChangeBackground
      }), /*#__PURE__*/_react["default"].createElement(_MusicModal["default"], {
        dispatch: dispatch,
        onVisibleChange: this.onModalCancel('showMusicModal'),
        visible: showMusicModal
      }));
    }
  }]);
  return Header;
}(_react["default"].Component);

(0, _defineProperty2["default"])(Header, "propTypes", {
  dispatch: _propTypes["default"].func.isRequired,
  pages: _propTypes["default"].array.isRequired,
  editList: _propTypes["default"].object.isRequired,
  backGroundImage: _propTypes["default"].string,
  backMusicUrl: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Header, "defaultProps", {
  backGroundImage: '',
  backMusicUrl: ''
});

var mapStateToProps = function mapStateToProps(store) {
  var state = store.toJS();
  var pages = state.pages,
      editList = state.editList,
      backGroundImage = state.backGroundImage,
      backMusicUrl = state.backMusicUrl,
      groupList = state.groupList;
  var result = {
    state: JSON.stringify(state),
    pages: pages,
    editList: editList,
    backGroundImage: backGroundImage,
    backMusicUrl: backMusicUrl,
    groupList: groupList
  };
  return result;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);

exports["default"] = _default;