import React from 'react';
import PropTypes from 'prop-types';
// import { Input } from 'antd';
function Text(props) {
  const {
    color, fontSize, text, bgColor, lineHeight, fontFamily,
  } = props;
  return (
    <div
      style={{
        fontFamily,
        width: '100%',
        padding: 10,
        color,
        fontSize,
        background: bgColor,
        lineHeight,
        textShadow: 'rgb(255, 255, 255) 1px -1px 0px, rgb(255, 255, 255) 0px -1px 0px, rgb(255, 255, 255) 1px 1px 0px, rgb(255, 255, 255) 1px 0px 0px, rgb(255, 255, 255) 1px 1px 0px, rgb(255, 255, 255) 0px 1px 0px, rgb(255, 255, 255) -1px 1px 0px, rgb(255, 255, 255) -1px 0px 0px, rgb(214, 214, 214) 1px 1px 0px, rgb(214, 214, 214) 2px 2px 0px, rgb(214, 214, 214) 3px 3px 0px, rgb(214, 214, 214) 4px 4px 0px, rgb(125, 144, 175) 5px 5px 0.2em',
        fontWeight: 'bold',
      }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
export default Text;
