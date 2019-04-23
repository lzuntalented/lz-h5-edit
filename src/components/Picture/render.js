import React from 'react';
import PropTypes from 'prop-types';
// import { Input } from 'antd';
import Layout from '../EditItem/render';

function Picture() {
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <img src="http://www.lzuntalented.cn/lzphp-show/data/img/1.jpg" alt="" width="100%" />
    </div>
  );
}

export default Layout(Picture);
