import React from 'react';
import PropTypes from 'prop-types';

function Link(props) {
  const {
    en, zh, imgRight, imgLeft,
    zhColor, zhBgColor, zhBorderColor,
    enColor,
    text, color, bgColor, phone, href, height,
  } = props;
  const style = {
    color,
    background: bgColor,
    fontSize: 14,
    height: height || '100%',
    padding: 20,
  };
  return (
    <div
      style={style}
    >
      <div style={{
        position: 'relative',
        color: zhColor,
        backgroundColor: zhBgColor,
        border: `1px solid ${zhBorderColor}`,
      }}
      >
        <img src={imgRight} alt="" width="30" style={{ position: 'absolute', left: 0, bottom: 0 }} />
        {zh}
        <img src={imgLeft} alt="" width="40" style={{ position: 'absolute', right: 0, bottom: 0 }} />
      </div>
      <div>{en}</div>
    </div>
  );
}

Link.prototype.propTypes = {
  imgSrc: PropTypes.string,
  onLoad: PropTypes.func,
};

Link.prototype.defaultProps = {
  imgSrc: '',
  onLoad: () => {},
};

export default Link;
