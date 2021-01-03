import React from 'react';
import { connect } from 'react-redux';
import { ITEM_TYPE_SINGLE, ITEM_TYPE_GROUP } from '@lzshow/constants';
import { getComponentEditMap } from '@lzshow/core';
import GroupItem from './components/GroupItem';
import {
  startMove, resetContentHeight, changeActiveEditKey, addAttrs, changeAttrs, emptyAnimate,
  initStore,
} from './store/action';

// 引入样式文件
import './index.scss';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastData: null,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { data, dispatch } = nextProps;
    const { lastData } = prevState;
    if (data !== lastData) {
      if (data) {
        dispatch(initStore(data));
      }
      return Object.assign(prevState, { data, lastData: data });
    }
    return null;
  }

  renderComponent() {
    const {
      pages, activePage, editList, groupList, dispatch, activeEditKey,
    } = this.props;

    const list = pages[activePage];
    return list.map((it) => {
      const { nodeType } = editList[it];
      const actions = {
        startMove,
        resetContentHeight,
        changeActiveEditKey,
        addAttrs,
        changeAttrs,
        emptyAnimate,
      };
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
            actions={actions}
            onItemClick={() => { console.log('dddd'); }}
          />
        );
      } if (nodeType === ITEM_TYPE_GROUP) {
        return (
          <GroupItem
            dispatch={dispatch}
            uniqueId={it}
            activeEditKey={activeEditKey}
            activePage={activePage}
            editList={editList}
            groupList={groupList}
            key={it}
            actions={actions}
            list={groupList[it]}
          />
        );
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
