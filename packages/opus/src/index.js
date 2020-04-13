import React from 'react';
import ReactDOM from 'react-dom';

import { winSize } from '@lz/utils';
import App from './App';
import 'animate.css';
import './index.scss';

function setPageScale() {
  const width = window.innerWidth;
  const scale = width / winSize.width;
  const dom = window.document.querySelector('#viewport');
  dom.setAttribute('content', `width=${winSize.width},initial-scale=${scale},maximum-scale=${scale},user-scalable=no`);
}
setPageScale();
const rootEl = window.document.getElementById('root');
rootEl.style.height = `${winSize.height}`;
rootEl.style.display = 'flex';
ReactDOM.render(
  <App />,
  rootEl,
);
