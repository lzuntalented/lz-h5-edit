import React from 'react';
import PropTypes from 'prop-types';

function Text(props) {
  const {
    color, fontSize, text, bgColor, lineHeight, opacity, ...others
  } = props;
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
        ...others,
      }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
export default Text;
