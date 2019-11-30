import React from 'react';
import PropTypes from 'prop-types';

function Picture(props) {
  const {
    shape, stroke, bgColor,
  } = props;
  const style = { background: bgColor, width: '100%' };
  return (
    <div
      style={style}
    >
      {
        shape === '1' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="4957228616"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 119.5 103.5"
          enableBackground="new 0 0 119.5 103.5"
          xmlSpace="preserve"
          preserveAspectRatio="none"
          className="element svg-element"
        ><path fill={stroke} d="M59.7,0L0,103.5h119.5L59.7,0z M59.7,4l56.3,97.5H3.5L59.7,4z" style={{ fill: stroke }} />
        </svg>
        )
      }
      {
        shape === '2' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          baseProfile="full"
          height="100%"
          width="100%"
          viewBox="0 0 420 120"
          preserveAspectRatio="none"
          id="1019877593"
          className="element svg-element"
        >
          <path fill={stroke} d="M0 60h420v1h-420v-1z" style={{ fill: stroke }} />
        </svg>
        )
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
