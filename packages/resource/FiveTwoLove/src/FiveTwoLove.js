import React from 'react';
import PropTypes from 'prop-types';

function FiveTwoLove(props) {
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
    padding: 20,
    display: 'flex',
  };
  return (
    <div
      style={style}
    >
      <div>
        <img src={imgBefore} alt="" width="30" style={{ left: -10, bottom: 0 }} />
        <img src={imgBack} alt="" width="40" style={{ right: -10, bottom: 5 }} />
      </div>
      <div style={{
        position: 'relative',
        color: zhColor,
        backgroundColor: zhBgColor,
        border: `1px solid ${zhBorderColor}`,
        padding: 5,
        lineHeight: '25px',
        borderRadius: 35,
        textAlign: 'center',
      }}
      >
        <img src={imgLeft} alt="" width="30" style={{ position: 'absolute', left: -10, bottom: 0 }} />
        {zh}
        <img src={imgRight} alt="" width="40" style={{ position: 'absolute', right: -10, bottom: 5 }} />
      </div>
      <div
        style={{
          lineHeight: '25px',
          color: 'rgb(245, 59, 171)',
          textAlign: 'center',
          fontSize: 12,
        }}
      >{en}
      </div>
    </div>
  );
}

FiveTwoLove.prototype.propTypes = {
  imgSrc: PropTypes.string,
  onLoad: PropTypes.func,
};

FiveTwoLove.prototype.defaultProps = {
  imgSrc: '',
  onLoad: () => {},
};

export default FiveTwoLove;
