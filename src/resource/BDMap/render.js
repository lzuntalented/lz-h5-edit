import React from 'react';
import PropTypes from 'prop-types';
// import { Input } from 'antd';
import Map from '../../components/Map';
import Layout from '../../components/EditItem/render';

function Picture(props) {
  const { address } = props;
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Map address={address} />
    </div>
  );
}

export default Layout(Picture);
