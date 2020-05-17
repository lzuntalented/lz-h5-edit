import React from 'react';
import PropTypes from 'prop-types';

function LoveForever(props) {
  const {
    en, zh, imgBefore, imgBack,
    zhColor, zhBgColor, zhBorderColor,
    enColor,
    text, color, bgColor, phone, href, height,
  } = props;
  const style = {
    color,
    background: bgColor,
    fontSize: 14,
    height: height || '100%',
    padding: 4,
    display: 'flex',
  };
  return (
    <div
      style={style}
    >
      <div
        style={{
          width: 45,
          position: 'relative',
          marginRight: 24,
        }}
      >
        <img src={imgBack} alt="" width="40" style={{ position: 'absolute', left: 15, top: 5 }} />
        <img src={imgBefore} alt="" width="45" style={{ position: 'absolute', left: 0 }} />
      </div>
      <div>
        <div
          style={{
            color: zhColor,
            backgroundColor: zhBgColor,
            textAlign: 'center',
            fontSize: 16,
          }}
        >{zh}
        </div>
        <div
          style={{
            color: enColor,
            textAlign: 'center',
            fontSize: 12,
          }}
        >{en}
        </div>
      </div>
    </div>
  );
}

LoveForever.prototype.propTypes = {
  imgSrc: PropTypes.string,
  onLoad: PropTypes.func,
};

LoveForever.prototype.defaultProps = {
  imgSrc: '',
  onLoad: () => {},
};

export default LoveForever;
