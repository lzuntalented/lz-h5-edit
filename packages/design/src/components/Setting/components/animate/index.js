import React from 'react';
import {
  Select, Row, Col, Input, Tabs, Icon, Button, Collapse,
} from 'antd';
import { connect } from 'react-redux';
import { ANIMATE_REPEAT_INFINITE, ANIMATE_REPEAT_NORMAL } from '@lzshow/constants';
import getSelectOptions from './config';
import {
  changeAnimation, addAnimate, changeAnimate, previewAnimate,
  removeAnimate, hoverAnimate, previewAnimateWithIndex,
} from '../../../../store/action';

const opts = getSelectOptions();
const { Option, OptGroup } = Select;

class Animation extends React.Component {
  state = {
    showAnimateName: false,
    changeAnimateIndex: -1,
  }

  onChangeAnimateName = name => () => {
    const { changeAnimateIndex } = this.state;
    const { dispatch } = this.props;
    if (changeAnimateIndex >= 0) {
      dispatch(changeAnimate(changeAnimateIndex, { name }));
    } else {
      dispatch(addAnimate(name));
    }
    this.setState({
      showAnimateName: false,
      changeAnimateIndex: -1,
    });
  }

  onPreviewAnimateWithIndex = index => (e) => {
    e.stopPropagation();
    const { dispatch } = this.props;
    dispatch(previewAnimateWithIndex(index));
  }

  onChangeAnimateNameWithIndex = index => (e) => {
    e.stopPropagation();
    this.setState({
      showAnimateName: true,
      changeAnimateIndex: index,
    });
  }

  setBaseStyle = (index, key) => (e) => {
    const { dispatch, activeEditKey } = this.props;
    const { target } = e;
    let value = e;
    if (target) {
      value = +target.value;
    }
    dispatch(changeAnimation({ [key]: value }, activeEditKey, index));
  }

  onAddAnimate = () => {
    this.setState({
      showAnimateName: true,
      changeAnimateIndex: -1,
    });
  }

  onPreviewAnimate = () => {
    const { dispatch } = this.props;
    dispatch(previewAnimate());
  }

  onRemoveAnimate = index => (e) => {
    e.stopPropagation();
    const { dispatch } = this.props;
    dispatch(removeAnimate(index));
  }

  onHoverAnimate = name => () => {
    const { dispatch } = this.props;
    dispatch(hoverAnimate(name));
  }

  render() {
    const { showAnimateName } = this.state;
    const {
      animate, animates = [],
    } = this.props;
    return (
      <div className="animate-container">
        <Row align="middle" type="flex" gutter={8} justify="center">
          <Col span={12} className="text-center">
            <Button type="primary" onClick={this.onAddAnimate}>添加动画</Button>
          </Col>
          <Col span={12} className="text-center">
            <Button onClick={this.onPreviewAnimate}>预览动画</Button>
          </Col>
        </Row>
        <Collapse>
          {
          animates.map((that, index) => {
            const {
              name, delay, repeat, duration,
            } = that;
            let animateName = name;
            opts.forEach((item) => {
              const obj = item.list.find(it => it.key === name);
              if (obj) {
                animateName = obj.title;
              }
            });
            return (
              <Collapse.Panel
                header={(
                  <Row type="flex" gutter={8} justify="space-around">
                    <Col>动画{index + 1}</Col>
                    <Col onClick={this.onChangeAnimateNameWithIndex(index)}>
                      <div className="aniamte-name">{animateName}</div>
                    </Col>
                    <Col className="op-animate">
                      <Icon onClick={this.onPreviewAnimateWithIndex(index)} type="caret-right" title="预览" />
                      <Icon onClick={this.onRemoveAnimate(index)} title="删除" type="delete" />
                    </Col>
                  </Row>
              )}
                key={index}
              >
                <Row align="middle" type="flex" gutter={8}>
                  <Col span={8}>动画时间</Col>
                  <Col span={16}>
                    <Input value={duration} type="number" onChange={this.setBaseStyle(index, 'duration')} />
                  </Col>
                </Row>
                <Row align="middle" type="flex" gutter={8}>
                  <Col span={8}>动画延时</Col>
                  <Col span={16}>
                    <Input value={delay} type="number" onChange={this.setBaseStyle(index, 'delay')} />
                  </Col>
                </Row>
                <Row align="middle" type="flex" gutter={8}>
                  <Col span={8}>动画循环</Col>
                  <Col span={16}>
                    <Select
                      onChange={this.setBaseStyle(index, 'repeat')}
                      style={{ width: '100%' }}
                      value={repeat}
                    >
                      <Option value={ANIMATE_REPEAT_NORMAL}>默认</Option>
                      <Option value={ANIMATE_REPEAT_INFINITE}>无限循环</Option>
                    </Select>
                  </Col>
                </Row>
              </Collapse.Panel>
            );
          })
        }
        </Collapse>
        {
          showAnimateName && (
          <div className="animate-names">
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
                          className={`animate-name-item ${it.key === 1 ? 'active' : ''}`}
                          onClick={this.onChangeAnimateName(it.key)}
                          onMouseEnter={this.onHoverAnimate(it.key)}
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
          )
        }
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
