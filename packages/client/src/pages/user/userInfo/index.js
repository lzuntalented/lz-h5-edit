import React from 'react';
import {
  Form, Input, Icon, Button, Row, Col, message,
} from 'antd';

import './index.scss';
import { register } from '../../../services/user';

function Register(props) {
  const { form } = props;
  const { getFieldDecorator } = form;
  const handleSubmit = () => {
    form.validateFields((err, value) => {
      if (err) return;
      // console.log(value); return;
      register(value).then((res) => {
        const { id } = res;
        message.success(`注册成功${id}`);
      }).catch((res) => {
        message.error(res && res.errmsg);
      });
    });
  };
  return (
    <div className="page-register">
      info
    </div>
  );
}

export default Form.create()(Register);
