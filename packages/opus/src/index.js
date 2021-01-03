import React from 'react';
import ReactDOM from 'react-dom';
import isMobile from 'ismobilejs';
import { winSize } from '@lzshow/utils';
import App from './App';
import './index.scss';

function setPageScale() {
  const width = window.innerWidth;
  const scale = width / winSize.width;
  const dom = window.document.querySelector('#viewport');
  dom.setAttribute('content', `width=${winSize.width},initial-scale=${scale},maximum-scale=${scale},user-scalable=no`);
}
setPageScale();
const rootEl = window.document.getElementById('root');
rootEl.style.height = `${winSize.height}px`;
rootEl.style.display = 'flex';

if (!(isMobile(window.navigator.userAgent).phone)) {
  // 桌面端访问作品
  rootEl.style.width = `${winSize.width}px`;
  rootEl.style.margin = '0 auto';
  rootEl.style.border = '1px solid #eee';
}
ReactDOM.render(
  <App />,
  rootEl,
);
