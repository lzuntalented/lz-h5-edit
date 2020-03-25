
export const winSize = {
  width: 320,
  height: 480,
};

export function generatorTexttextShadow(obj = {}) {
  const {
    textShadowX, textShadowY, textShadowSpread, textShadowColor,
    textSolidSize, textSolidColor, textSolidAngle,
    textBorderSize, textBorderColor,
  } = obj;
  // 阴影
  let textShadow = `${textShadowColor} ${textShadowX}px ${textShadowY}px ${textShadowSpread}px`;

  // 立体感
  if (textSolidSize && textSolidSize > 0) {
    const solidTmp = [];
    for (let i = 0; i < +textSolidSize; i += 1) {
      if (textSolidAngle < 45) {
        solidTmp.push(`${textSolidColor} 0px ${-(i + 1)}px 0px`);
      } else if (textSolidAngle < 90) {
        solidTmp.push(`${textSolidColor} ${(i + 1)}px ${-(i + 1)}px 0px`);
      } else if (textSolidAngle < 135) {
        solidTmp.push(`${textSolidColor} ${(i + 1)}px 0px 0px`);
      } else if (textSolidAngle < 180) {
        solidTmp.push(`${textSolidColor} ${(i + 1)}px ${(i + 1)}px 0px`);
      } else if (textSolidAngle < 225) {
        solidTmp.push(`${textSolidColor} 0px ${(i + 1)}px 0px`);
      } else if (textSolidAngle < 270) {
        solidTmp.push(`${textSolidColor} ${-(i + 1)}px ${(i + 1)}px 0px`);
      } else if (textSolidAngle < 315) {
        solidTmp.push(`${textSolidColor} ${-(i + 1)}px 0px 0px`);
      } else if (textSolidAngle < 315) {
        solidTmp.push(`${textSolidColor} ${-(i + 1)}px ${-(i + 1)}px 0px`);
      }
    }
    textShadow = `${solidTmp.join()}, ${textShadow}`;
  }

  // 描边
  if (textBorderSize && textBorderSize > 0) {
    const tmp = [];
    for (let i = 0; i <= +textBorderSize; i += 1) {
      for (let j = 0; j <= +textBorderSize; j += 1) {
        tmp.push(`${textBorderColor} ${-j}px ${-i}px 0px`);
        tmp.push(`${textBorderColor} ${j}px ${i}px 0px`);
        tmp.push(`${textBorderColor} ${i}px ${j}px 0px`);
        tmp.push(`${textBorderColor} ${-i}px ${j}px 0px`);
      }
    }
    textShadow = `${tmp.join()}, ${textShadow}`;
  }
  return textShadow;
}
