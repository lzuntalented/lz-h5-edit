import React from 'react';
import PropTypes from 'prop-types';
import { generatorTexttextShadow } from '../../utils';
// import { Input } from 'antd';

function Text(props) {
  const {
    color, fontSize, text, bgColor, lineHeight, opacity,
    textShadowX, textShadowY, textShadowSpread, textShadowColor,
    textSolidSize, textSolidColor, textSolidAngle,
    ...others
  } = props;
  const textShadow = generatorTexttextShadow({
    textShadowX,
    textShadowY,
    textShadowSpread,
    textShadowColor,
    textSolidSize,
    textSolidColor,
    textSolidAngle,
  });
  return (
    <div
      style={{
        width: '100%',
        padding: 10,
        color,
        fontSize,
        background: bgColor,
        lineHeight,
        opacity,
        textShadow,
        ...others,
      }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
export default Text;
