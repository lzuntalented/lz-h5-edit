import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

function ButtonRender(props) {
  const {
    text, type, getContentFormData,
  } = props;
  const onClick = () => {
    console.log(getContentFormData());
  };
  return (
    <Button
      style={{
        width: '100%',
      }}
      type={type}
      onClick={onClick}
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
