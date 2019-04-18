import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import home from '../pages/home';
import shuang from '../pages/shuang';

import Layout from '../pages/layout';

const RouteConfig = (
  <Layout>
    <Router history={hashHistory}>
      <Route path="/" component={home} />
      <Route path="/list/:type" getComponent={(nextState, cb) => { cb(null, shuang); }} />
    </Router>
  </Layout>

);

export default RouteConfig;
