import React from 'react';
import PropTypes from 'prop-types';
import Map from '../../components/Map';

function BDMap(props) {
  const { address, style } = props;
  const mapStyle = Object.assign({ width: '100%' }, style);
  return (
    <div style={mapStyle}>
      <Map address={address} />
    </div>
  );
}

BDMap.prototype.propTypes = {
  address: PropTypes.string,
  style: PropTypes.object,
};

BDMap.prototype.defaultProps = {
  address: '',
  style: {},
};

export default BDMap;
