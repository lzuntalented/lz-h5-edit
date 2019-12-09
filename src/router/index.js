import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import home from '../pages/home/Loadable';
import realpreview from '../pages/realpreview/Loadable';
import create from '../pages/create/Loadable';
import list from '../pages/list/Loadable';
import Mall from '../pages/mall/Loadable';

import Layout from '../core/layout';
import DefaultHeader from '../core/layout/components/Header';
import EmptyHeader from '../core/layout/components/EmptyHeader';

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
      <Route path="/list" component={list} />
      <Route path="/mall" component={Mall} />
      <Route path="/create" component={create} />
      <Route path="/edit/:id" component={create} />
      <Route path="/preview/:id" component={realpreview} />
    </Router>
  </Layout>
);

export default RouteConfig;
