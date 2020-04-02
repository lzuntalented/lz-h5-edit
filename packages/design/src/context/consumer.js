import React from 'react';
import Context from './index';

export default function (props) {
  const { children } = props;
  return (
    <Context.Consumer>
      {value => React.cloneElement(children, { config: value })}
    </Context.Consumer>
  );
  // return props => (
  //   <Context.Consumer>
  //     {value => <Comp config={value} {...props} />}
  //   </Context.Consumer>
  // );
}
