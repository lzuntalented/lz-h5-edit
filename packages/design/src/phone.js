import React from 'react';
import { connect } from 'react-redux';
import GroupItem from './components/GroupItem';
import { ITEM_TYPE_SINGLE, ITEM_TYPE_GROUP } from '@lzshow/constants';
import {
  startMove, resetContentHeight, changeActiveEditKey, addAttrs, changeAttrs, emptyAnimate,
  initStore,
} from './store/action';

// 引入样式文件
import './index.scss';

import { getComponentEditMap } from '@lzshow/core';
import { getComponetData } from './config';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // 担心观众老爷等不及，预制一个场景
    // const data = get1024Data();
    const { dispatch, id } = this.props;
    const data = getComponetData(id);
    dispatch(initStore(data));
  }

  renderComponent() {
    const {
      pages, activePage, editList, groupList, dispatch, activeEditKey,
    } = this.props;

    const list = pages[activePage];
    return list.map((it) => {
      const { nodeType } = editList[it];
      if (nodeType === ITEM_TYPE_SINGLE) {
        const { type, ...others } = editList[it];
        const Component = getComponentEditMap(type);
        return (
          <Component
            dispatch={dispatch}
            uniqueId={it}
            activeEditKey={activeEditKey}
            activePage={activePage}
            editList={editList}
            groupList={groupList}
            key={it}
            data={others}
            actions={{
              startMove,
              resetContentHeight,
              changeActiveEditKey,
              addAttrs,
              changeAttrs,
              emptyAnimate,
            }}
          />
        );
      } if (nodeType === ITEM_TYPE_GROUP) {
        return <GroupItem key={it} uniqueId={it} list={groupList[it]} editList={editList} />;
      }
      return null;
    });
  }

  render() {
    const { backGroundImage, backMusicUrl } = this.props;
    const style = {
      backgroundImage: `url(${backGroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100%',
    };
    return (
      <div className="home-edit-item-container" style={style}>
        <div>
          {this.renderComponent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const {
    pages, activePage, editList, backGroundImage, backMusicUrl, groupList, activeEditKey,
  } = state;
  const result = {
    pages, activePage, editList, backGroundImage, backMusicUrl, groupList, activeEditKey,
  };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Phone);
