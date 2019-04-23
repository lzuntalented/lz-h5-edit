import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import home from '../pages/home';
import preview from '../pages/preview';

import Layout from '../pages/layout';

const RouteConfig = (
  <Layout>
    <Router history={hashHistory}>
      <Route path="/" component={home} />
      <Route path="/preview" component={preview} />
    </Router>
  </Layout>

);

export default RouteConfig;
