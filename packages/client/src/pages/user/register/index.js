import React from 'react';
import {
  Form, Input, Icon, Button, Row, Col, message,
} from 'antd';
import { MailOutlined,UserOutlined,LockOutlined } from '@ant-design/icons'

import './index.scss';
import { register } from '../../../services/user';

function Register() {
  const [form] = Form.useForm()
  const handleSubmit = () => {
    form.validateFields().then((value) => {
      // console.log(value); return;
      register(value).then((res) => {
        // const { id } = res;
        window.location.hash = '#/login';
        message.success('注册成功');
      }).catch((res) => {
        message.error(res && res.errmsg);
      });
    });
  };
 
  return (
    <div className="page-register">
      <div className="home-logo">
        <img src="http://www.lzuntalented.cn/img/home-log.png" alt="" width="100%" />
        <img src="http://www.lzuntalented.cn/img/heart-logo.png" alt="" height="48" />
      </div>
      <Form form={form} className="login-container">
        <Form.Item name="email" rules={ [{ required: true, message: '请输入邮箱!' },
              {
                validator: (rule, value, callback) => {
                  if (value && !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
                    callback('请输入正确的邮箱地址！');
                  }

                  // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
                  callback();
                },
              },
            ]}>
            <Input
              prefix={<MailOutlined />}
              placeholder="请输入邮箱"
            />
        </Form.Item>
        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
            <Input
              prefix={<UserOutlined />}
              placeholder="请输入用户名"
            />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
     
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="请输入密码"
            />
        </Form.Item>
        <Form.Item name="passwordAgain" rules={[{ required: true, message: '请再次输入密码!' }]}>
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="请再次输入密码"
            />
        </Form.Item>
        <Button type="primary" onClick={handleSubmit} className="login-form-button">
          注册
        </Button>
      </Form>
    </div>
  );
}

export default Register;
