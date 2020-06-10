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
      <Form className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Button type="primary" onClick={handleSubmit} className="login-form-button">
          注册
        </Button>
      </Form>
    </div>
  );
}

export default Form.create()(Register);
