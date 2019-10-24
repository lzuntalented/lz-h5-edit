import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import home from '../pages/home/Loadable';
import realpreview from '../pages/realpreview/Loadable';

import Layout from '../pages/layout';

const RouteConfig = (
  <Layout>
    <Router history={hashHistory}>
      <Route path="/" component={home} />
      <Route path="/preview/:source" component={realpreview} />
    </Router>
  </Layout>

);

export default RouteConfig;
