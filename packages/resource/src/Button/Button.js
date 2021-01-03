import React from 'react';
import PropTypes from 'prop-types';
import { Button, message } from 'antd';

function ButtonRender(props) {
  const {
    text, type, getContentFormData, getRequestHandler,
  } = props;
  const onClick = () => {
    if (getContentFormData) {
      const data = getContentFormData();
      getRequestHandler(data).then((res) => {
        message.success(res || '操作成功');
      }).catch(() => {
        message.error('操作失败，请重试');
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
