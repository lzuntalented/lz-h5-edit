import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './app.js';

export default function() {
  return <Provider store={store}>
    <App />
  </Provider>,
}