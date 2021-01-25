import React from 'react';
import PropTypes from 'prop-types';

function EditComp(props) {
  const {
    title,
    titleEn,
    content,
    textAlign,
    fontStyle,
    textDecoration,
    fontWeight,
    contentImage,
    contentBgColor,
    contentColor,
    fontSize,
    color,
  } = props;
  return (
    <div>
      {
      title.split('\n').map(it => (
        <div
          style={{
            textAlign,
            fontSize,
            color,
          }}
        >{it}
        </div>
      ))
    }
      <div
        style={{
          position: 'relative',
          width: 300,
          height: 200,
          padding: '24px',
          marginTop: 8,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: '50%',
            overflow: 'hidden',
          }}
        >
          <img
            src={contentImage}
            alt=""
            width="100%"
          />
        </div>
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: '50%',
            overflow: 'hidden',
            transform: 'rotate(180deg)',
          }}
        >
          <img
            src={contentImage}
            alt=""
            width="100%"
          />
        </div>
        <div style={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: contentBgColor,
          color: contentColor,
          padding: 12,
        }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

EditComp.prototype.propTypes = {
};

EditComp.prototype.defaultProps = {
};

export default EditComp;
