"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MusicIcon;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("@lzshow/utils");

function MusicIcon(props) {
  var backMusicUrl = props.backMusicUrl;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      musicPlay = _useState2[0],
      setMusicPlay = _useState2[1];

  var musicHandler = (0, _react.useRef)(new _utils.Music());

  var onPlay = function onPlay() {
    var current = musicHandler.current;

    if (current) {
      if (musicPlay) {
        current.pause();
      } else {
        current.play();
      }

      setMusicPlay(!musicPlay);
    }
  };

  (0, _react.useEffect)(function () {
    var current = musicHandler.current;

    if (current) {
      current.setSrc(backMusicUrl);
    }

    return function () {
      if (current) {
        current.pause();
      }
    };
  }, [backMusicUrl]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      animationPlayState: musicPlay ? 'running' : 'paused'
    },
    className: "music-container",
    onClick: onPlay
  });
}

MusicIcon.propTypes = {
  backMusicUrl: _propTypes["default"].string
};
MusicIcon.defaultProps = {
  backMusicUrl: ''
};