import React from 'react';
import PropTypes from 'prop-types';

function Picture(props) {
  const { imgSrc, onLoad } = props;
  const style = { width: '100%' };
  if (onLoad) {
    style.minHeight = '40%';
  }
  return (
    <div
      style={style}
    >
      {
            imgSrc && <img src={imgSrc} alt="" onLoad={onLoad} width="100%" />
        }
    </div>
  );
}

Picture.prototype.propTypes = {
  imgSrc: PropTypes.string,
  onLoad: PropTypes.func,
};

Picture.prototype.defaultProps = {
  imgSrc: '',
  onLoad: () => {},
};

export default Picture;
