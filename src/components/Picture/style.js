import React from 'react';
import { connect } from 'react-redux';
import {
  Row, Col, Input,
} from 'antd';
import { changeAttrs, changeBaseStyle } from '../EditItem/action';
import SettingPosition from '../SettingPosition';

import './index.scss';

class TextStyle extends React.Component {
    state = {}

    onChange = (e) => {
      const { dispatch, activeEditKey } = this.props;
      dispatch(changeAttrs({ fontSize: +e }, activeEditKey));
    }

    onChangeColor = (e) => {
      const { dispatch, activeEditKey } = this.props;
      dispatch(changeAttrs({ color: e }, activeEditKey));
    }

    onChangeAttr = key => (e) => {
      const { dispatch, activeEditKey } = this.props;
      const { target } = e;
      let value = e;
      if (target) {
        value = target.value;
      }
      dispatch(changeAttrs({ [key]: value }, activeEditKey));
    }

    setBaseStyle = key => (e) => {
      const { dispatch, activeEditKey } = this.props;
      const { target } = e;
      let value = e;
      if (target) {
        value = +target.value;
      }
      dispatch(changeBaseStyle({ [key]: value }, activeEditKey));
    }

    render() {
      const { activeEditKey } = this.props;
      if (!activeEditKey) return <div>no style</div>;
      const {
        width, height, top, left, attrs,
      } = this.props;
      return (
        <div className="component-picture-style-container">
          <Row align="middle" type="flex" gutter={8}>
            <Col span={8}>图片地址</Col>
            <Col span={16}>
              <Input value={attrs.imgSrc} onChange={this.onChangeAttr('imgSrc')} />
            </Col>
          </Row>
          <SettingPosition {...this.props} setBaseStyle={this.setBaseStyle} />
        </div>
      );
    }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const { editList, activeEditKey } = state;
  const result = { activeEditKey };
  if (activeEditKey) {
    const item = editList[activeEditKey];
    if (item) return Object.assign(result, item.current);
  }
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(TextStyle);
