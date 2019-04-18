import React from 'react';
import EditItem from '../../components/Text';
import Input from '../../components/Input';

import { isUndefined } from '../../utils/Tools';

import './index.scss';
// 引入样式文件

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <Input />
      </div>
    );
  }
}

export default Home;
