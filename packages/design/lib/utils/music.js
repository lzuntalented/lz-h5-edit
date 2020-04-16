"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

// const audio = window.document.createElement('audio');
// audio.loop = 'loop';
// audio.autoplay = 'autoplay';
// export default function setSrc(src) {
//   audio.src = src;
//   audio.play();
// }
// export function paly() {
//   audio.play();
// }
// export function pause() {
//   audio.pause();
// }
var Music = /*#__PURE__*/function () {
  function Music() {
    (0, _classCallCheck2["default"])(this, Music);
    var audio = window.document.createElement('audio');
    audio.loop = 'loop';
    audio.autoplay = 'autoplay';
    this.audio = audio;
  }

  (0, _createClass2["default"])(Music, [{
    key: "setSrc",
    value: function setSrc(src) {
      this.audio.src = src;
      this.play();
    }
  }, {
    key: "play",
    value: function play() {
      this.audio.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.audio.pause();
    }
  }]);
  return Music;
}();

exports["default"] = Music;