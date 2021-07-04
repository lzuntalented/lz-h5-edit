import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  Menu, Row, Col, Layout, Dropdown, Button, Icon,
} from 'antd';
import WithUserAuth from '../../../WithUserAuth'
import { info, logout } from '../../../../services/user';

const { Header } = Layout;// 引入样式文件

function LayoutFrame(props) {
  const { userInfo } = props
  const [info, setInfo] = useState(null)

  useEffect(() => {
    userInfo && setInfo(userInfo)
  }, [userInfo])

  const onClick = ({ key }) => {
    if (key === '2') {
      window.location.hash = '/list';
    } else if (key === '3') {
      window.location.hash = '/mall';
    } else if (key === '1') {
      window.location.hash = '/';
    }
  }

  const handleMenuClick = async () => {
    await logout();
    setInfo(null);
    window.location.hash = '/';
  }

  const { location } = props;
  const selectKeys = [];
  if (location && location.pathname === '/list') {
    selectKeys.push('2');
  } else if (location && location.pathname === '/mall') {
    selectKeys.push('3');
  } else {
    selectKeys.push('1');
  }

  return (
    <Header className="layout-header-container">
    <Row className="default-header" type="flex" justify="space-between">
      <Col>
        <img onClick={() => onClick({ key: '1' })} src="http://www.lzuntalented.cn/img/heart-logo.png" alt="" height="48" />
      </Col>
      <Col>
        <Row type="flex">
          <Col>
            <Menu
              selectedKeys={selectKeys}
              defaultSelectedKeys={['1']}
              mode="horizontal"
              onSelect={onClick}
            >
              <Menu.Item key="1">首页</Menu.Item>
              <Menu.Item key="3">模板商城</Menu.Item>
              <Menu.Item key="2">作品集市</Menu.Item>
            </Menu>
          </Col>
          <Col>
            {
              info
                ? (
                  <Dropdown.Button
                    onClick={() => {
                      window.location.hash = '#/ucenter/info';
                    }}
                    overlay={(
                      <Menu onClick={handleMenuClick}>
                        <Menu.Item key="1">
                          退出登录
                        </Menu.Item>
                      </Menu>
                      )}
                    icon={<Icon type="user" />}
                  >
                    {info.name}
                  </Dropdown.Button>
                )
                : <a href="#/login">登录</a>
            }
          </Col>
        </Row>
      </Col>
    </Row>
  </Header>
  )
}

export default WithUserAuth(LayoutFrame, {same: true});
