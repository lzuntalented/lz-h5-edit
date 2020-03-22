import React from 'react';
import ReactDOM from 'react-dom';

import router from './router';

const rootEl = window.document.getElementById('root');
ReactDOM.render(
  { router },
  rootEl,
);
