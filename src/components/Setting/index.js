import React from 'react';
import { connect } from 'react-redux';
import Draggable from 'react-draggable'; // The default
import { Tabs, Select, Button } from 'antd';

import TextStyle from '../Input/style';
import PictureStyle from '../Picture/style';
import GroupItemStyle from '../GroupItem/style';

import './index.scss';
import { COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE } from '../../core/constants';
import { changeBaseStyle, removeItem } from '../../store/action';
import Animate from './components/animate';

const { TabPane } = Tabs;
const { Option, OptGroup } = Select;

class Setting extends React.Component {
  onAnimateChange = (e) => {
    const { activeEditKey, dispatch } = this.props;
    dispatch(changeBaseStyle({
      animate: e,
    }, activeEditKey));
  }

  onRemove = () => {
    const { dispatch } = this.props;
    dispatch(removeItem());
  }

  renderComponent() {
    const { componentType } = this.props;
    switch (componentType) {
      case COMPONENT_TYPE_TEXT:
        return <TextStyle />;
      case COMPONENT_TYPE_PICTURE:
        return <PictureStyle />;
      default:
        break;
    }
    return <GroupItemStyle />;
  }

  render() {
    const { activeEditKey } = this.props;
    return (
      activeEditKey && activeEditKey.length > 0
      && (
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
          <header className="header">组件设置</header>
          <Tabs className="tabs-content">
            <TabPane tab="样式" key="1">
              {
                  this.renderComponent()
              }
              <div className="text-center m-t-12 m-b-12">
                <Button onClick={this.onRemove} type="danger">删除元素</Button>
              </div>
            </TabPane>
            {
              activeEditKey.length === 1
              && (
              <TabPane tab="动画" key="2">
                <Animate />
              </TabPane>
              )
            }
          </Tabs>
        </section>
      </Draggable>
      )
    );
  }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const { editList, activeEditKey } = state;
  const result = { activeEditKey };
  if (activeEditKey) {
    const item = editList[activeEditKey];
    if (item) return Object.assign(result, { componentType: item.type });
  }
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Setting);
