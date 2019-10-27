import React from 'react';

const Comp = React.lazy(() => import(/* webpackChunkName: 'create' */ './index.js'));
export default props => <React.Suspense fallback={<div>loading</div>}><Comp {...props} /></React.Suspense>;
