import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import router from './router';
import './style';
import './style/font.scss';

const rootEl = window.document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  rootEl,
);
