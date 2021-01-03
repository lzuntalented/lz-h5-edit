import React from 'react';
import {
  Form, Input, Icon, Button, Row, Col, message,
} from 'antd';
import JParticles from 'jparticles';

import './index.scss';
import { register } from '../../../services/user';

const bgRef = React.createRef();
function Register(props) {
  const { form } = props;
  const { getFieldDecorator } = form;
  const handleSubmit = () => {
    form.validateFields((err, value) => {
      if (err) return;
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
  React.useEffect(() => {
    const Ctor = JParticles.particle;
    const hannder = new Ctor('#bg', {
      num: 20,
    });
    console.log(hannder);
  }, []);
  return (
    <div className="page-register">
      <div className="home-logo">
        <img src="http://www.lzuntalented.cn/img/home-log.png" alt="" width="100%" />
        <img src="http://www.lzuntalented.cn/img/heart-logo.png" alt="" height="48" />
      </div>
      <Form className="login-container">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: '请输入邮箱!' },
              {
                validator: (rule, value, callback) => {
                  if (value && !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
                    callback('请输入正确的邮箱地址！');
                  }

                  // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
                  callback();
                },
              },
            ],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入邮箱"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('passwordAgain', {
            rules: [{ required: true, message: '请再次输入密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请再次输入密码"
            />,
          )}
        </Form.Item>
        <Button type="primary" onClick={handleSubmit} className="login-form-button">
          注册
        </Button>
      </Form>
      <div ref={bgRef} id="bg" className="bg-container" />
    </div>
  );
}

export default Form.create()(Register);
