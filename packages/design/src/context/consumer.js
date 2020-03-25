import React from 'react';
import Context from './index';

export default function (Comp) {
  return props => (
    <Context.Consumer>
      {value => <Comp config={value} {...props} />}
    </Context.Consumer>
  );
}
