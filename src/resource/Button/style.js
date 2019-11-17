import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Select, Row, Col, Slider, Input,
} from 'antd';
import { changeAttrs, changeBaseStyle } from '../../store/action';
import SettingPosition from '../../components/SettingPosition';
import ColorPicker from '../../components/ColorPicker';

import './style.scss';

class TextStyle extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
    }

    state = {}

    onChange = (e) => {
      const { dispatch, activeEditKey } = this.props;
      dispatch(changeAttrs({ fontSize: +e }, activeEditKey));
    }

    onChangeColor = (e) => {
      const { dispatch, activeEditKey } = this.props;
      dispatch(changeAttrs({ color: e }, activeEditKey));
    }

    onChangeAttr = (key, number = false) => (e) => {
      const { target } = e;
      let value = e;
      if (target) {
        if (number) {
          value = +target.value;
        } else {
          value = target.value;
        }
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
      if (!activeEditKey || activeEditKey.length < 0) return <div>no style</div>;
      const {
        width, height, top, left, attrs,
      } = this.props;
      const { lineHeight } = attrs;
      return (
        <div className="component-text-style-container">
          <Row align="middle" type="flex" gutter={8}>
            <Col span={8}>文字</Col>
            <Col span={16}>
              <Input value={attrs.text} onChange={this.onChangeAttr('text')} />
            </Col>
          </Row>
          <Row align="middle" type="flex" gutter={8}>
            <Col span={8}>按钮类型</Col>
            <Col span={16}>
              <Select value={attrs.type} onChange={this.onChangeAttr('type')}>
                <Select.Option value="">默认</Select.Option>
                <Select.Option value="primary">蓝色</Select.Option>
                <Select.Option value="danger">红色</Select.Option>
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
  if (activeEditKey && activeEditKey.length === 1) {
    const item = editList[activeEditKey[0]];
    if (item) return Object.assign(result, item);
  }
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(TextStyle);
