import React from 'react';
import ReactDOM from 'react-dom';
import { getDefaultAttrs } from '@lzshow/utils';
import Resource from '../src';

const { render: Comp, style } = Resource;
// import
const attrs = getDefaultAttrs(style);

const rootEl = window.document.getElementById('root');
ReactDOM.render(
  <Comp {...attrs} />,
  rootEl,
);
