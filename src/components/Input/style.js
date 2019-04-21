import React from 'react';
import { connect } from 'react-redux';
import {
  Select, Row, Col,
} from 'antd';
import { changeAttrs, changeBaseStyle } from '../EditItem/action';
import SettingPosition from '../SettingPosition';

import './style.scss';

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
      dispatch(changeAttrs({ [key]: e }, activeEditKey));
    }

    setBaseStyle = key => (e) => {
      const { dispatch, activeEditKey } = this.props;
      const { target } = e;
      console.log(target.value);
      dispatch(changeBaseStyle({ [key]: +target.value }, activeEditKey));
    }

    render() {
      const { activeEditKey } = this.props;
      if (!activeEditKey) return <div>no style</div>;
      const {
        width, height, top, left,
      } = this.props;
      return (
        <div className="component-text-style-container">
          <Row align="middle" type="flex">
            <Col span={8}>字号</Col>
            <Col span={16}>
              <Select defaultValue={12} onChange={this.onChange}>
                <Select.Option key={12}>12</Select.Option>
                <Select.Option key={14}>14</Select.Option>
                <Select.Option key={16}>16</Select.Option>
              </Select>
            </Col>
          </Row>
          <Row align="middle" type="flex">
            <Col span={8}>颜色</Col>
            <Col span={16}>
              <Select defaultValue="red" onChange={this.onChangeColor}>
                <Select.Option key="red">red</Select.Option>
                <Select.Option key="blue">blue</Select.Option>
                <Select.Option key="yellow">yellow</Select.Option>
              </Select>
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
