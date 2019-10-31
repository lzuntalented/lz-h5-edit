import React from 'react';
import { connect } from 'react-redux';
import Draggable from 'react-draggable'; // The default
import {
  Tabs, Button, Row, Col,
} from 'antd';
import {
  COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE, COMPONENT_TYPE_BUTTON, COMPONENT_TYPE_INPUT,
} from '../../../../core/constants';
import { addPageItem } from '../../../../store/action';

const { TabPane } = Tabs;

class Setting extends React.Component {
  onAddComponent = key => () => {
    const { dispatch } = this.props;
    dispatch(addPageItem(key));
  }

  render() {
    return (
      <div className="resource">
        {
          <Draggable
            axis="both"
            handle=".component-setting-container > .header"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            grid={[25, 25]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}
          >
            <section className="component-setting-container">
              <header className="header">物料仓库</header>
              <Tabs className="tabs-content">
                <TabPane tab="基础组件" key="1">
                  <div className="text-center m-t-12 m-b-12">
                    <Row>
                      <Col span={8}>
                        <Button onClick={this.onAddComponent(COMPONENT_TYPE_TEXT)}>文本</Button>
                      </Col>
                      <Col span={8}>
                        <Button onClick={this.onAddComponent(COMPONENT_TYPE_PICTURE)}>图片</Button>
                      </Col>
                      <Col span={8}>
                        <Button onClick={this.onAddComponent(COMPONENT_TYPE_BUTTON)}>按钮</Button>
                      </Col>
                    </Row>
                    <Row className="m-t-8">
                      <Col span={8}>
                        <Button onClick={this.onAddComponent(COMPONENT_TYPE_INPUT)}>输入框</Button>
                      </Col>
                    </Row>
                  </div>
                </TabPane>
                <TabPane tab="艺术字" key="2">
                  <div className="text-center m-t-12 m-b-12">
                    <Button onClick={this.onRemove} type="danger">删除元素</Button>
                  </div>
                </TabPane>
              </Tabs>
            </section>
          </Draggable>
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
    if (item) return Object.assign(result, { componentType: item.type });
  }
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Setting);
