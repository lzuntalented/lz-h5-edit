import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SortableContainer } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import hotkeys from 'hotkeys-js';
import { Icon } from 'antd';
import { ITEM_TYPE_GROUP } from '@lzshow/constants';
import SortableItem from './components/Item';

import './index.scss';
import {
  changeActiveEditKey, resortPageItem, groupActiveEditKeys,
  addActiveEditKey, splitGroupActiveEditKeys, copyItem, changeItemName, resortGroupItem,
} from '../../store/action';

const SortableList = SortableContainer(({
  items, onItemClick, onItemCopyClick, onChangeItemName, onSortEndCB,
}) => (
  <div className="sort-container">
    {
      items.map((value, index) => {
        const { children, key } = value;
        const defaultProps = {
          key,
          index,
          value,
          onItemCopyClick,
          onItemClick,
          onChangeItemName,
        };
        if (children) {
          return (
            <SortableItem group {...defaultProps}>
              <SortableList
                onSortEnd={onSortEndCB(children, key)}
                items={children}
                onItemClick={onItemClick}
                onItemCopyClick={onItemCopyClick}
                onChangeItemName={onChangeItemName}
                onSortEndCB={onSortEndCB}
              />
            </SortableItem>
          );
        }
        return (
          <SortableItem {...defaultProps} />
        );
      })
    }
  </div>
));

let multiple = false;

class LevelManage extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    groupList: PropTypes.object.isRequired,
    activeEditKey: PropTypes.array.isRequired,
    editList: PropTypes.object.isRequired,
    list: PropTypes.array.isRequired,
  }

  componentDidMount() {
    hotkeys('*', { keyup: true, keydown: true }, (event) => {
      // Prevent the default refresh event under WINDOWS system
      if (hotkeys.shift) {
        if (event.type === 'keydown') {
          multiple = true;
        } else {
          multiple = false;
        }
      }
    });
  }

  onSortEnd = (list, key) => (obj) => {
    const { oldIndex, newIndex } = obj;
    const { dispatch, groupList } = this.props;
    if (key) {
      const arr = arrayMove(groupList[key], oldIndex, newIndex);
      dispatch(resortGroupItem(key, arr));
    } else {
      const pages = arrayMove(list, oldIndex, newIndex).map(it => it.key);
      dispatch(resortPageItem(pages));
    }
  }

  onItemClick = key => () => {
    const { dispatch, activeEditKey, editList } = this.props;
    const item = editList[key];
    const obj = activeEditKey.find(
      it => editList[it].nodeType === ITEM_TYPE_GROUP,
    );
    if (obj || item.nodeType === ITEM_TYPE_GROUP) {
      dispatch(changeActiveEditKey(key));
      return;
    }
    if (multiple) {
      dispatch(addActiveEditKey(key));
    } else {
      dispatch(changeActiveEditKey(key));
    }
  }

  onItemCopyClick = key => (e) => {
    e.stopPropagation();
    const { dispatch } = this.props;
    dispatch(copyItem(key));
  }

  onChangeItemName = (key, name) => {
    const { dispatch } = this.props;
    dispatch(changeItemName(key, name));
  }

  onGroup = () => {
    const { dispatch } = this.props;
    dispatch(groupActiveEditKeys());
  }

  // 拆分
  onGroupSplit = () => {
    const { dispatch } = this.props;
    dispatch(splitGroupActiveEditKeys());
  }

  render() {
    const { list } = this.props;
    return (
      <div className="component-level-manage-container">
        <div className="top-op">
          <span className="op" onClick={this.onGroup}>
            <Icon className="m-r-4" type="wallet" />
            组合
          </span>
          <span className="m-l-16 op" onClick={this.onGroupSplit}>
            <Icon className="m-r-4" type="disconnect" />
            拆分
          </span>
        </div>
        <SortableList
          items={list}
          onItemClick={this.onItemClick}
          onItemCopyClick={this.onItemCopyClick}
          onSortEnd={this.onSortEnd(list)}
          onSortEndCB={this.onSortEnd}
          onChangeItemName={this.onChangeItemName}
        />
      </div>
    );
  }
}

function createTree(list, editList, groupList, activeEditKey) {
  const result = [];
  list.forEach((it) => {
    if (groupList[it]) {
      result.push({
        name: editList[it].name,
        key: it,
        active: activeEditKey.indexOf(it) > -1,
        children: createTree(groupList[it], editList, groupList, activeEditKey),
      });
    } else {
      result.push({
        name: editList[it].name,
        key: it,
        active: activeEditKey.indexOf(it) > -1,
      });
    }
  });

  return result;
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const {
    pages, activePage, editList, activeEditKey, groupList,
  } = state;
  const list = createTree(pages[activePage], editList, groupList, activeEditKey);
  const result = {
    list, activeEditKey, editList, groupList,
  };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(LevelManage);
