import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import home from '../pages/home/Loadable';
import realpreview from '../pages/realpreview/Loadable';
import create from '../pages/create/Loadable';
import list from '../pages/list/Loadable';

import Layout from '../core/layout';
import DefaultHeader from '../core/layout/components/Header';
import EditHeader from '../components/Header';

const RouteConfig = (
  <Layout
    nav={(
      <div>
        <Router history={hashHistory}>
          <Route path="/create" component={EditHeader} />
          <Route path="/edit/:id" component={EditHeader} />
          <Route path="/**" component={DefaultHeader} />
        </Router>
      </div>
    )}
  >
    <Router history={hashHistory}>
      <Route path="/" component={home} />
      <Route path="/list" component={list} />
      <Route path="/create" component={create} />
      <Route path="/edit/:id" component={create} />
      <Route path="/preview/:id" component={realpreview} />
    </Router>
  </Layout>
);

export default RouteConfig;
