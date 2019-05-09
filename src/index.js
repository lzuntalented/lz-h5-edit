import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import router from './router';
// import 'antd/dist/antd.less';
// import './style/a.less';
import './style';

const rootEl = window.document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  rootEl,
);
