import React from 'react';
import PropTypes from 'prop-types';
// import { Input } from 'antd';
import Layout from '../EditItem/render';

function Text(props) {
  const { color, fontSize, text, bgColor, lineHeight } = props;
  return (
    <div
      style={{
        width: '100%',
        minHeight: '40px',
        padding: 10,
        color,
        fontSize,
        background: bgColor,
        lineHeight: fontSize * lineHeight
      }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
export default Layout(Text);
