import React from 'react';
import PropTypes from 'prop-types';

function EditComp(props) {
  const {
    title,
    content,
    back1,
    back2,
    back3,
    back4,
    back5,
    before1,
    before2,
    before3,
    before4,
    before5,
  } = props;
  const backs = [back1, back2, back3, back4, back5];
  const befores = [before1, before2, before3, before4, before5];
  return (
    <div style={{ position: 'relative', width: 220, margin: '0 auto' }}>
      <ul style={{
        position: 'absolute',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        top: 4,
        left: 0,
      }}
      >
        {
        backs.map((it, index) => (
          <li
            key={index}
            style={{
              float: 'left',
              width: 34,
              height: 34,
              backgroundColor: it,
              listStyle: 'none',
              padding: 0,
              margin: 0,
              marginLeft: index === 0 ? 0 : 8,
              border: '1px solid #cacaca',
            }}
          />
        ))
      }
      </ul>
      <ul style={{
        position: 'absolute',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        left: 4,
        top: 0,
      }}
      >
        {
        befores.map((it, index) => (
          <li
            key={index}
            style={{
              float: 'left',
              width: 34,
              height: 34,
              backgroundColor: it,
              listStyle: 'none',
              padding: 0,
              margin: 0,
              marginLeft: index === 0 ? 0 : 8,
              border: '1px solid #cacaca',
            }}
          />
        ))
      }
      </ul>
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          lineHeight: '34px',
          fontSize: 18,
          letterSpacing: 9,
          paddingLeft: 12,
          textAlign: 'left',
        }}
      >{title}
      </div>
      <div
        style={{
          marginTop: 20,
          textAlign: 'center',
          fontSize: 20,
        }}
      >{content}
      </div>
    </div>
  );
}

EditComp.prototype.propTypes = {
};

EditComp.prototype.defaultProps = {
};

export default EditComp;
