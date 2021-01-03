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
import OpusChart from '../pages/opus/Chart/Loadable';

import Layout from '../components/layout';
// import UserLayout from '../components/UserLayout';
import DefaultHeader from '../components/layout/components/Header';
import EmptyHeader from '../components/layout/components/EmptyHeader';

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
      <Route path="/ucenter/info" component={Info} />
      <Route path="/opus/data/:id" component={OpusChart} />
      <Route path="/opus/data" component={OpusChart} />
    </Router>
  </Layout>
);

export default RouteConfig;
