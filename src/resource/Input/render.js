import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import Layout from '../../components/EditItem/render';

function Text(props) {
  const {
    color, fontSize, text, bgColor, lineHeight,
  } = props;
  return (
    <Input
      style={{
        width: '100%',
        minHeight: '40px',
        padding: 10,
        color,
        fontSize,
        background: bgColor,
        lineHeight,
      }}
      defaultValue={text}
    />
  );
}
export default Layout(Text);
