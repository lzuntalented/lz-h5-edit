import React from 'react';
import ReactDOM from 'react-dom';

import router from './router';
import './style';

const rootEl = window.document.getElementById('root');
ReactDOM.render(
  router,
  rootEl,
);
