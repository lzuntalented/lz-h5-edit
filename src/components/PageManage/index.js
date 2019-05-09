import React from 'react';
import { connect } from 'react-redux';
import Draggable from 'react-draggable'; // The default
import { Button } from 'antd';

import './index.scss';
import { COMPONENT_TYPE_TEXT, COMPONENT_TYPE_PICTURE } from '../EditItem/constants';
import {
 addPage, addPageItem, changeActivePage, removeItem 
} from '../EditItem/action';

class PageManage extends React.Component {
  onAddPage = () => {
    const { dispatch } = this.props;
    dispatch(addPage());
  }

  onAddText = () => {
    const { dispatch } = this.props;
    dispatch(addPageItem(COMPONENT_TYPE_TEXT));
  }

  onAddPicture = () => {
    const { dispatch } = this.props;
    dispatch(addPageItem(COMPONENT_TYPE_PICTURE));
  }

  changePage = pageIndex => () => {
    const { dispatch } = this.props;
    dispatch(changeActivePage(pageIndex));
  }

  onRemove = () => {
    const { dispatch } = this.props;
    dispatch(removeItem());
  }

  render() {
    const { pages, activePage } = this.props;
    return (
      <Draggable
        axis="both"
        handle=".component-page-manage-container > .header"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <section className="component-page-manage-container">
          <header className="header">页面管理</header>
          <div className="content">
            <Button onClick={this.onAddText}>新增Text</Button>
            <Button onClick={this.onAddPicture}>新增Picture</Button>
            <Button onClick={this.onAddPage}>新增页面</Button>
            <Button onClick={this.onRemove}>删除元素</Button>
            {
              pages.map((it, index) => (
                <div
                  key={index}
                  onClick={this.changePage(index)}
                  className={activePage === index ? 'page-item active' : 'page-item'}
                >
                  <div className="index">{index + 1}</div>
                  <div className="describe">{`第${index + 1}页`}</div>
                </div>
              ))
            }
          </div>
        </section>
      </Draggable>
    );
  }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const { pages, activePage } = state;
  const result = { pages, activePage };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(PageManage);
