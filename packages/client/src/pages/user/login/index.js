import React from 'react';
import {
  Form, Input, Button, Col, Row, message,
} from 'antd';
import {UserOutlined,LockOutlined} from '@ant-design/icons';

import './index.scss';
import { login } from '../../../services/user';

const bgRef = React.createRef();

function Login() {
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form.validateFields().then((value) => {
      console.log(value); 
      // console.log(value); return;
      login(value).then((res) => {
        // const { id } = res;
        window.location.href = '/#/ucenter/info';
        message.success('登录成功');
      }).catch((res) => {
        message.error(res && res.errmsg);
      });
    });
  };
  return (
    <div className="page-login">
      <div className="home-logo">
        <img src="http://www.lzuntalented.cn/img/home-log.png" alt="" width="100%" />
        <img src="http://www.lzuntalented.cn/img/heart-logo.png" alt="" height="48" />
      </div>
      <Form form={form} className="login-container" initialValues={{
        username: "user",
        password: "password"
      }}>
        <Form.Item name="username" rules={ [{ required: true, message: 'Please input your username!' }]}>
            <Input
            prefix={<UserOutlined />}
              placeholder="请输入邮箱/用户名"
            />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="请输入密码"
            />
        </Form.Item>
        <Button type="primary" className="login-form-button" onClick={handleSubmit}>
          登 录
        </Button>
        <div className="tip">请注意：用户【user】为默认测试账号，仅仅作为体验功能使用</div>
        <Row type="flex" justify="space-between">
          <Col>
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
          </Col>
          <Col>
            <a href="#/register">注册</a>
          </Col>
        </Row>
      </Form>
      <div ref={bgRef} id="bg" className="bg-container" />
    </div>
  );
}

export default Login;
