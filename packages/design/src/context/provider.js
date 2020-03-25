import React from 'react';
import Context from './index';

export default function (props) {
  const { children, config } = props;
  return (
    <Context.Provider value={config}>
      {children}
    </Context.Provider>
  );
}
