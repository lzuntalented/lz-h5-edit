import React from 'react';
import PropTypes from 'prop-types';
// import { Input } from 'antd';
import Layout from '../../components/EditItem';
import { COMPONENT_TYPE_PICTURE } from '../../core/constants';

import config from './config';
import { getDefaultAttrs } from '../../utils/Tools';
// 组件默认属性
const defaultAttrs = getDefaultAttrs(config);

class Picture extends React.Component {
  static propTypes = {
    registerAttrs: PropTypes.func.isRequired,
    resetHeight: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    props.registerAttrs(defaultAttrs);
  }

  onLoad = () => {
    const { resetHeight } = this.props;
    resetHeight();
  }

  render() {
    const { imgSrc } = this.props;
    return (
      <div
        style={{
          width: '100%',
          minHeight: '40px',
        }}
      >
        <img src={imgSrc} alt="" onLoad={this.onLoad} width="100%" />
      </div>
    );
  }
}

export default Layout(Picture, COMPONENT_TYPE_PICTURE);
