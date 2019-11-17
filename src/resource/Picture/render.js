import React from 'react';
import PropTypes from 'prop-types';
// import { Input } from 'antd';
import Layout from '../../components/EditItem/render';

function Picture(props) {
  const { imgSrc } = props;
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <img src={imgSrc} alt="" width="100%" />
    </div>
  );
}

export default Layout(Picture);
