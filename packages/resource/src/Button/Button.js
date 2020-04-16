import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

function ButtonRender(props) {
  const {
    text, type,
  } = props;
  return (
    <Button
      style={{
        width: '100%',
      }}
      type={type}
    >{text}
    </Button>
  );
}

ButtonRender.prototype.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

ButtonRender.prototype.defaultProps = {
  text: '',
  type: '',
};

export default ButtonRender;
