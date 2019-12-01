import React from 'react';
import PropTypes from 'prop-types';

function Video(props) {
  const { src, autoplay, loop } = props;
  const style = { width: '100%' };
  return (
    <div
      style={style}
    >
      {
        src && (
        <video
          loop={loop === '1'}
          controls="controls"
          src={src}
          width="100%"
          autoPlay={autoplay === '1'}
        />
        )
      }
    </div>
  );
}

Video.prototype.propTypes = {
  src: PropTypes.string,
  autoplay: PropTypes.string,
  loop: PropTypes.string,
};

Video.prototype.defaultProps = {
  src: '',
  autoplay: '0',
  loop: '0',
};

export default Video;
