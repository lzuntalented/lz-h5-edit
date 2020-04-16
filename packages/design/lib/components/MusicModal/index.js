"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ModalContainer = _interopRequireDefault(require("../ModalContainer"));

var _MusicList = _interopRequireDefault(require("./components/MusicList"));

var _action = require("../../store/action");

var _ConsumerContainer = _interopRequireDefault(require("../../context/ConsumerContainer"));

require("./index.scss");

function MusicModal(props) {
  var dispatch = props.dispatch,
      onVisibleChange = props.onVisibleChange,
      visible = props.visible,
      config = props.config;

  var _ref = config || {},
      libs = _ref.libs;

  var _ref2 = libs || {},
      music = _ref2.music;

  var _ref3 = music || {},
      initData = _ref3.initData;

  var ref = (0, _react.useRef)();

  var hidden = function hidden() {
    var current = ref.current;
    if (current) current.onStop();
    onVisibleChange(false);
  };

  var onChangeMusic = function onChangeMusic(src) {
    dispatch((0, _action.changeBackMusicUrl)(src));
    hidden();
  };

  var onClear = function onClear() {
    onChangeMusic('');
  };

  return /*#__PURE__*/_react["default"].createElement(_ModalContainer["default"], {
    onCancel: hidden,
    maskClosable: true,
    getContainer: false,
    visible: visible,
    title: "\u97F3\u4E50\u5E93",
    options: [{
      title: '音乐列表',
      comp: /*#__PURE__*/_react["default"].createElement(_MusicList["default"], {
        ref: ref,
        defaultList: initData,
        onSelect: onChangeMusic
      })
    }]
  }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    type: "danger",
    onClick: onClear
  }, "\u6E05\u7A7A\u97F3\u6548"));
}

MusicModal.propTypes = {
  dispatch: _propTypes["default"].func.isRequired,
  onVisibleChange: _propTypes["default"].func.isRequired,
  config: _propTypes["default"].object.isRequired,
  visible: _propTypes["default"].bool
};
MusicModal.defaultProps = {
  visible: false
};

var _default = (0, _ConsumerContainer["default"])(MusicModal);

exports["default"] = _default;