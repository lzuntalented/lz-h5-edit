import React from 'react';
import Layout from '../EditItem';

function Text() {
  return <div contentEditable="true" placeholder="请输入" />;
}

export default Layout(Text);
