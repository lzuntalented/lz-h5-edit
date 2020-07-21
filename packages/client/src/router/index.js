import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Layout as AntDLayout, Menu } from 'antd';

import home from '../pages/home/Loadable';
import Preview from '../pages/preview/Loadable';
import create from '../pages/create/Loadable';
import list from '../pages/list/Loadable';
import Mall from '../pages/mall/Loadable';
import Register from '../pages/user/register/Loadable';
import Login from '../pages/user/login/Loadable';
import Info from '../pages/user/userInfo/Loadable';

import Layout from '../components/layout';
// import UserLayout from '../components/UserLayout';
import DefaultHeader from '../components/layout/components/Header';
import EmptyHeader from '../components/layout/components/EmptyHeader';

const { Sider, Content } = AntDLayout;

const RouteConfig = (
  <Layout
    nav={(
      <div>
        <Router history={hashHistory}>
          <Route path="/create" component={EmptyHeader} />
          <Route path="/edit/:id" component={EmptyHeader} />
          <Route path="/**" component={DefaultHeader} />
        </Router>
      </div>
    )}
  >
    <Router history={hashHistory}>
      <Route path="/" component={home} />
      <Route path="/create" component={create} />
      <Route path="/edit/:id" component={create} />
      <Route path="/list" component={list} />
      <Route path="/mall" component={Mall} />
      <Route path="/preview/:id" component={Preview} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/ucenter">
        <AntDLayout>
          <Sider>
            <Menu
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </Menu>
          </Sider>
          <AntDLayout>
            <Content>
              <Route path="/ucenter/info" component={Info} />
            </Content>
          </AntDLayout>
        </AntDLayout>
      </Route>
    </Router>
  </Layout>
);

export default RouteConfig;
