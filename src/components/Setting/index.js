import React from 'react';
import { connect } from 'react-redux';
import Draggable from 'react-draggable'; // The default
import { Tabs } from 'antd';

import TextStyle from '../Input/style';
import PictureStyle from '../Picture/style';

import './index.scss';
import { COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE } from '../EditItem/constants';

const { TabPane } = Tabs;

class Setting extends React.Component {
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
    return <div />;
  }

  render() {
    const { activeEditKey } = this.props;
    return (
      activeEditKey
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
            </TabPane>
            <TabPane tab="动画" key="2">Content of Tab Pane 2</TabPane>
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
    if (item) return Object.assign(result, { componentType: item.current.type });
  }
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Setting);
