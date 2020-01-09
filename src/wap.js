import React from 'react';
import ReactDOM from 'react-dom';

import Preview from './wap/preview';
import './style';
import { winSize } from './utils';
import './style/font.scss';
import './style/wap.scss';

function setPageScale() {
  const width = window.innerWidth;
  const scale = width / winSize.width;
  const dom = window.document.querySelector('#viewport');
  dom.setAttribute('content', `width=${winSize.width},initial-scale=${scale},maximum-scale=${scale},user-scalable=no`);

  // const height = window.innerHeight;
  // if (height > winSize.height) {
  //   const top = (height - winSize.height) / 2;
  // }
}
setPageScale();
const rootEl = window.document.getElementById('root');
ReactDOM.render(
  <Preview />,
  rootEl,
);
