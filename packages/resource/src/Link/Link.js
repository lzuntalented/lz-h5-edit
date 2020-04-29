import React from 'react';
import PropTypes from 'prop-types';

function Link(props) {
  const {
    linkType, text, color, bgColor, phone, href, height,
  } = props;
  const style = {
    color,
    background: bgColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    height: height || '100%',
  };
  return (
    <div
      style={style}
    >
      {
        linkType === '2' && <a style={style} href={`tel:${phone}`}>{text}</a>
      }
      {
        linkType === '1' && <a style={style} href={href} target="__blank">{text}</a>
      }
      {
        linkType === '0' && text
      }
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
