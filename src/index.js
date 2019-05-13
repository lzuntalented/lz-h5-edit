import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import router from './router';
import 'antd/dist/antd.less';
// import './style/a.less';
import './style';
import 'animate.css';

const rootEl = window.document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  rootEl,
);
