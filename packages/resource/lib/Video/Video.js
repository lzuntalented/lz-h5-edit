"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/* eslint-disable jsx-a11y/media-has-caption */
function play(ref, playIcon, setPlayIcon) {
  return function () {
    if (ref && ref.current) {
      if (playIcon) {
        ref.current.play();
      } else {
        ref.current.pause();
      }

      setPlayIcon(!playIcon);
    }
  };
}

function Video(props) {
  var _React$useState = _react["default"].useState(true),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      playIcon = _React$useState2[0],
      setPlayIcon = _React$useState2[1];

  var src = props.src,
      loop = props.loop,
      showStatus = props.showStatus;
  var style = {
    width: '100%'
  };

  var ref = _react["default"].createRef();

  _react["default"].useEffect(function () {
    if (ref && ref.current) {
      if (!showStatus) {
        ref.current.pause();
        setPlayIcon(true);
      }
    }
  }, [showStatus]);

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: style,
    onClick: play(ref, playIcon, setPlayIcon)
  }, playIcon && src && /*#__PURE__*/_react["default"].createElement("i", {
    style: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      margin: '0 auto',
      fontSize: 80,
      left: 0,
      right: 0,
      textAlign: 'center'
    },
    className: "iconfont icon-shipinbofangyingpian"
  }), src && /*#__PURE__*/_react["default"].createElement("video", {
    ref: ref,
    loop: loop === '1',
    "x5-playsinline": "",
    playsInline: "",
    "webkit-playsinline": "",
    src: src,
    width: "100%"
  }));
}

Video.prototype.propTypes = {
  src: _propTypes["default"].string,
  loop: _propTypes["default"].string,
  showStatus: _propTypes["default"].bool
};
Video.prototype.defaultProps = {
  src: '',
  loop: '0',
  showStatus: true
};
var _default = Video;
exports["default"] = _default;