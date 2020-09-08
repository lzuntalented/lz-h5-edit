import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

function ButtonRender(props) {
  const {
    text, type, getContentFormData, getRequestHandler,
  } = props;
  const onClick = () => {
    if (getContentFormData) {
      const data = getContentFormData();
      getRequestHandler(data).then((res) => {
        console.log(res);
      });
    }
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
  getContentFormData: PropTypes.func.isRequired,
};

ButtonRender.prototype.defaultProps = {
  text: '',
  type: '',
};

export default ButtonRender;
