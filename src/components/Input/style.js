import React from 'react';
import { connect } from 'react-redux';
import {
  Select, Row, Col, Slider, Input
} from 'antd';
import { changeAttrs, changeBaseStyle } from '../EditItem/action';
import SettingPosition from '../SettingPosition';
import ColorPicker from '../ColorPicker';

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
      const { target } = e;
      let value = e;
      if (target) {
        value = +target.value;
      }
      const { dispatch, activeEditKey } = this.props;
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
      const { lineHeight } = attrs;
      return (
        <div className="component-text-style-container">
          <Row align="middle" type="flex" gutter={8}>
            <Col span={8}>字号</Col>
            <Col span={16}>
              <Select defaultValue={12} onChange={this.onChange}>
                <Select.Option key={12}>12</Select.Option>
                <Select.Option key={14}>14</Select.Option>
                <Select.Option key={16}>16</Select.Option>
              </Select>
            </Col>
          </Row>
          <Row align="middle" type="flex" gutter={8}>
            <Col span={8}>文字颜色</Col>
            <Col span={16}>
              <ColorPicker color={attrs.color} onChange={this.onChangeColor} />
            </Col>
          </Row>
          <Row align="middle" type="flex" gutter={8}>
            <Col span={8}>背景颜色</Col>
            <Col span={16}>
              <ColorPicker color={attrs.bgColor} onChange={this.onChangeAttr('bgColor')} />
            </Col>
          </Row>
          <Row align="middle" type="flex" gutter={8}>
            <Col span={8}>行高</Col>
            <Col span={8}>
              <Slider
                min={0}
                max={3}
                step={0.1}
                onChange={this.onChangeAttr('lineHeight')}
                value={lineHeight}
              />
            </Col>
            <Col span={8}>
              <Input value={lineHeight} onChange={this.onChangeAttr('lineHeight')} />
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
