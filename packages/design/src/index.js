import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from './store';
import App from './app';
import ConfigProvide from './context/provider';

export default function LzDesign(props) {
  const { onPublish } = props;
  return (
    <Provider store={store}>
      <ConfigProvide config={{ onPublish }}>
        <App />
      </ConfigProvide>
    </Provider>
  );
}

LzDesign.propTypes = {
  // 发布按钮点击
  onPublish: PropTypes.func.isRequired,
};
