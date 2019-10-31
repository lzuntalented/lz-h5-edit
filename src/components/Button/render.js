import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import Layout from '../EditItem/render';

function Text(props) {
  const {
    text, type,
  } = props;
  return (
    <Button
      style={{
        width: '100%',
      }}
      type={type}
    >{text}
    </Button>
  );
}
export default Layout(Text);
