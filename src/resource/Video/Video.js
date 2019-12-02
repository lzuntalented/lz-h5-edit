/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';

function play(ref, playIcon, setPlayIcon) {
  return () => {
    if (ref && ref.current) {
      if (playIcon) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
      setPlayIcon(!playIcon);
    }
  };
}

function Video(props) {
  const [playIcon, setPlayIcon] = React.useState(true);
  const { src, loop } = props;
  const style = { width: '100%' };
  const ref = React.createRef();
  return (
    <div
      style={style}
      onClick={play(ref, playIcon, setPlayIcon)}
    >
      {
        playIcon && src
        && (
        <i
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            margin: '0 auto',
            fontSize: 80,
            left: 0,
            right: 0,
            textAlign: 'center',
          }}
          className="iconfont icon-shipinbofangyingpian"
        />
        )
      }
      {
        src && (
        <video
          ref={ref}
          loop={loop === '1'}
          x5-playsinline=""
          playsInline=""
          webkit-playsinline=""
          src={src}
          width="100%"
        />
        )
      }
    </div>
  );
}

Video.prototype.propTypes = {
  src: PropTypes.string,
  loop: PropTypes.string,
};

Video.prototype.defaultProps = {
  src: '',
  loop: '0',
};

export default Video;
