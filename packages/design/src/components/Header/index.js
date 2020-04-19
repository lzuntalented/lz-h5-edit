/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Header from './header';
import ConfigConsumer from '../../context/consumer';

export default function (props) {
  return (
    <ConfigConsumer>
      <Header {...props} />
    </ConfigConsumer>
  );
}
