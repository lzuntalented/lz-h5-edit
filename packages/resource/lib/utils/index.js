"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generatorTexttextShadow = generatorTexttextShadow;
exports.winSize = void 0;
var winSize = {
  width: 320,
  height: 480
};
exports.winSize = winSize;

function generatorTexttextShadow() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var textShadowX = obj.textShadowX,
      textShadowY = obj.textShadowY,
      textShadowSpread = obj.textShadowSpread,
      textShadowColor = obj.textShadowColor,
      textSolidSize = obj.textSolidSize,
      textSolidColor = obj.textSolidColor,
      textSolidAngle = obj.textSolidAngle,
      textBorderSize = obj.textBorderSize,
      textBorderColor = obj.textBorderColor; // 阴影

  var textShadow = "".concat(textShadowColor, " ").concat(textShadowX, "px ").concat(textShadowY, "px ").concat(textShadowSpread, "px"); // 立体感

  if (textSolidSize && textSolidSize > 0) {
    var solidTmp = [];

    for (var i = 0; i < +textSolidSize; i += 1) {
      if (textSolidAngle < 45) {
        solidTmp.push("".concat(textSolidColor, " 0px ").concat(-(i + 1), "px 0px"));
      } else if (textSolidAngle < 90) {
        solidTmp.push("".concat(textSolidColor, " ").concat(i + 1, "px ").concat(-(i + 1), "px 0px"));
      } else if (textSolidAngle < 135) {
        solidTmp.push("".concat(textSolidColor, " ").concat(i + 1, "px 0px 0px"));
      } else if (textSolidAngle < 180) {
        solidTmp.push("".concat(textSolidColor, " ").concat(i + 1, "px ").concat(i + 1, "px 0px"));
      } else if (textSolidAngle < 225) {
        solidTmp.push("".concat(textSolidColor, " 0px ").concat(i + 1, "px 0px"));
      } else if (textSolidAngle < 270) {
        solidTmp.push("".concat(textSolidColor, " ").concat(-(i + 1), "px ").concat(i + 1, "px 0px"));
      } else if (textSolidAngle < 315) {
        solidTmp.push("".concat(textSolidColor, " ").concat(-(i + 1), "px 0px 0px"));
      } else if (textSolidAngle < 315) {
        solidTmp.push("".concat(textSolidColor, " ").concat(-(i + 1), "px ").concat(-(i + 1), "px 0px"));
      }
    }

    textShadow = "".concat(solidTmp.join(), ", ").concat(textShadow);
  } // 描边


  if (textBorderSize && textBorderSize > 0) {
    var tmp = [];

    for (var _i = 0; _i <= +textBorderSize; _i += 1) {
      for (var j = 0; j <= +textBorderSize; j += 1) {
        tmp.push("".concat(textBorderColor, " ").concat(-j, "px ").concat(-_i, "px 0px"));
        tmp.push("".concat(textBorderColor, " ").concat(j, "px ").concat(_i, "px 0px"));
        tmp.push("".concat(textBorderColor, " ").concat(_i, "px ").concat(j, "px 0px"));
        tmp.push("".concat(textBorderColor, " ").concat(-_i, "px ").concat(j, "px 0px"));
      }
    }

    textShadow = "".concat(tmp.join(), ", ").concat(textShadow);
  }

  return textShadow;
}