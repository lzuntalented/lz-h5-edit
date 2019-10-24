import React from 'react';

const Comp = React.lazy(() => import(/* webpackChunkName: 'preview' */ './index.js'));
export default () => <React.Suspense><Comp /></React.Suspense>;
