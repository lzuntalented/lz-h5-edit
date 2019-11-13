import React from 'react';
import {
  Select, Row, Col, Input, Tabs, Icon,
} from 'antd';
import { connect } from 'react-redux';
import getSelectOptions from './config';
import { changeAnimation } from '../../../../store/action';
import { ANIMATE_REPEAT_INFINITE, ANIMATE_REPEAT_NORMAL } from '../../../../core/constants';

const opts = getSelectOptions();
const { Option, OptGroup } = Select;

class Animation extends React.Component {
  onChangeAnimateName = name => () => {
    const { dispatch, activeEditKey } = this.props;
    dispatch(changeAnimation({ name }, activeEditKey));
  }

  setBaseStyle = key => (e) => {
    const { dispatch, activeEditKey } = this.props;
    const { target } = e;
    let value = e;
    if (target) {
      value = +target.value;
    }
    dispatch(changeAnimation({ [key]: value }, activeEditKey));
  }

  render() {
    const {
      animate,
    } = this.props;
    const {
      name, delay, repeat, duration,
    } = animate;
    let animateName = name;
    opts.forEach((item) => {
      const obj = item.list.find(it => it.key === name);
      if (obj) {
        animateName = obj.title;
      }
    });
    return (
      <div className="animate-container">
        <Row align="middle" type="flex" gutter={8}>
          <Col span={8}>动画时间</Col>
          <Col span={16}>
            <Input value={duration} type="number" onChange={this.setBaseStyle('duration')} />
          </Col>
        </Row>
        <Row align="middle" type="flex" gutter={8}>
          <Col span={8}>动画延时</Col>
          <Col span={16}>
            <Input value={delay} type="number" onChange={this.setBaseStyle('delay')} />
          </Col>
        </Row>
        <Row align="middle" type="flex" gutter={8}>
          <Col span={8}>动画循环</Col>
          <Col span={16}>
            <Select
              onChange={this.setBaseStyle('repeat')}
              style={{ width: '100%' }}
              value={repeat}
            >
              <Option value={ANIMATE_REPEAT_NORMAL}>默认</Option>
              <Option value={ANIMATE_REPEAT_INFINITE}>无限循环</Option>
            </Select>
          </Col>
        </Row>
        <Row align="middle" type="flex" gutter={8}>
          <Col span={8}>动画名称</Col>
          <Col span={16} className="animatename">
            {animateName}
          </Col>
        </Row>
        <Row align="middle" type="flex" gutter={8}>
          <Tabs size="small">
            {
              opts.map(item => (
                <Tabs.TabPane tab={item.title} key={item.title}>
                  <Row align="middle" type="flex" gutter={8} className="animte-overflow">
                    {
                    item.list.map(it => (
                      <Col span={8} key={it.key}>
                        <Row
                          type="flex"
                          justify="center"
                          className={`animate-name-item ${name === it.key ? 'active' : ''}`}
                          onClick={this.onChangeAnimateName(it.key)}
                        >
                          <Col><Icon type="smile" /><div className="animte-desc">{it.title}</div></Col>
                        </Row>
                      </Col>
                    ))
                  }
                  </Row>
                </Tabs.TabPane>
              ))
            }
          </Tabs>
        </Row>
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
export default connect(mapStateToProps, mapDispatchToProps)(Animation);
