import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { addAllFontCssToStyle } from '@lzshow/utils';
import store from './store';
import App from './app';
import ConfigProvide from './context/provider';

import './style';

export default function LzDesign(props) {
  const {
    onPublish, libs, data, onItemClick,
  } = props;
  const { font } = libs || {};
  useEffect(() => {
    addAllFontCssToStyle(font.initData || []);
  }, [font]);
  return (
    <Provider store={store}>
      <ConfigProvide config={{ onPublish, libs, onItemClick }}>
        <App data={data} />
      </ConfigProvide>
    </Provider>
  );
}

LzDesign.propTypes = {
  // 发布按钮点击
  onPublish: PropTypes.func.isRequired,
  // 弹出库
  libs: PropTypes.shape({
    // 图片库
    picture: PropTypes.shape({
      // 初始数据
      initData: PropTypes.array.isRequired,
      fetchPromise: PropTypes.func.isRequired,
      upLoadProps: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  onItemClick: PropTypes.func.isRequired,
};
