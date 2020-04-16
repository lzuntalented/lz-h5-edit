"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/upload/style/css");

var _upload = _interopRequireDefault(require("antd/lib/upload"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ModalContainer = _interopRequireDefault(require("../ModalContainer"));

var _ImageList = _interopRequireDefault(require("./components/ImageList"));

var _ImageClip = _interopRequireDefault(require("./components/ImageClip"));

var _action = require("../../store/action");

var _constants = require("../../core/constants");

var _ConsumerContainer = _interopRequireDefault(require("../../context/ConsumerContainer"));

require("./index.scss");

var useCrop = function useCrop() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      showCrop = _useState2[0],
      setShowCrop = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      cropUrl = _useState4[0],
      setCropUrl = _useState4[1];

  return {
    showCrop: showCrop,
    showCropAction: function showCropAction() {
      setShowCrop(true);
    },
    hiddenCropAction: function hiddenCropAction() {
      setShowCrop(false);
    },
    cropUrl: cropUrl,
    setCropUrl: setCropUrl
  };
};

function ImageModal(props) {
  var dispatch = props.dispatch,
      onVisibleChange = props.onVisibleChange,
      visible = props.visible,
      _props$addMode = props.addMode,
      addMode = _props$addMode === void 0 ? true : _props$addMode,
      config = props.config,
      withCrop = props.withCrop,
      onChangeBackground = props.onChangeBackground;
  var imageListRef = (0, _react.useRef)();

  var _useCrop = useCrop(),
      showCrop = _useCrop.showCrop,
      showCropAction = _useCrop.showCropAction,
      hiddenCropAction = _useCrop.hiddenCropAction,
      cropUrl = _useCrop.cropUrl,
      setCropUrl = _useCrop.setCropUrl;

  var _ref = config || {},
      libs = _ref.libs;

  var _ref2 = libs || {},
      picture = _ref2.picture;

  var _ref3 = picture || {},
      initData = _ref3.initData,
      fetchPromise = _ref3.fetchPromise,
      upLoadProps = _ref3.upLoadProps,
      cropImage = _ref3.cropImage;

  var onAddPicture = function onAddPicture(imgSrc) {
    return function () {
      if (withCrop) {
        setCropUrl(imgSrc);
        showCropAction();
      } else if (!addMode) {
        dispatch((0, _action.changeActiveItemAttrs)({
          imgSrc: imgSrc
        }));
      } else {
        dispatch((0, _action.addPageItemWithAttrs)(_constants.COMPONENT_TYPE_PICTURE, {
          imgSrc: imgSrc
        }));
      }

      onVisibleChange(false);
    };
  };

  var onFileChange = function onFileChange(_ref4) {
    var file = _ref4.file;

    if (file.status !== 'uploading') {
      if (file.status === 'done') {
        var current = imageListRef.current;

        if (current) {
          current.refresh();
        }
      }
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ModalContainer["default"], {
    onCancel: function onCancel() {
      onVisibleChange(false);
    },
    maskClosable: true,
    visible: visible,
    className: "modal-page-create-image",
    title: "\u56FE\u7247\u7D20\u6750\u5E93",
    options: [{
      title: '图片列表',
      comp: /*#__PURE__*/_react["default"].createElement(_ImageList["default"], {
        defaultPicture: initData,
        fetchPicture: fetchPromise,
        ref: imageListRef,
        onAddPicture: onAddPicture
      })
    }]
  }, /*#__PURE__*/_react["default"].createElement(_upload["default"], (0, _extends2["default"])({}, upLoadProps, {
    onChange: onFileChange
  }), /*#__PURE__*/_react["default"].createElement(_button["default"], {
    type: "primary"
  }, "\u672C\u5730\u4E0A\u4F20"))), /*#__PURE__*/_react["default"].createElement(_ImageClip["default"], {
    cropImage: cropImage,
    visible: showCrop,
    changeVisible: hiddenCropAction,
    src: cropUrl,
    onChangeBackground: onChangeBackground
  }));
}

ImageModal.propTypes = {
  dispatch: _propTypes["default"].func.isRequired,
  onVisibleChange: _propTypes["default"].func.isRequired,
  config: _propTypes["default"].object.isRequired,
  visible: _propTypes["default"].bool,
  addMode: _propTypes["default"].bool,
  withCrop: _propTypes["default"].bool
};
ImageModal.defaultProps = {
  visible: false,
  addMode: true,
  withCrop: false
};

var _default = (0, _ConsumerContainer["default"])(ImageModal);

exports["default"] = _default;