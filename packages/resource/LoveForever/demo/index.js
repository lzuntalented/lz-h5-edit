import React from 'react';
import ReactDOM from 'react-dom';
import { getDefaultAttrs } from '@lzshow/utils';
import Resource from '../src';

const { render: Comp, style } = Resource;
// import
const attrs = getDefaultAttrs(style);

const rootEl = window.document.getElementById('root');
ReactDOM.render(
  <div style={{ width: 320 }}><Comp {...attrs} /></div>,
  rootEl,
);
