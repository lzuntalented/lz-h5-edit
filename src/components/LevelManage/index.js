import React from 'react';
import { connect } from 'react-redux';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import classnames from 'classnames';
import hotkeys from 'hotkeys-js';

import './index.scss';
import {
  changeActiveEditKey, resortPageItem, groupActiveEditKeys, addActiveEditKey,
} from '../../store/action';

const SortableItem = SortableElement(({ value, onItemClick }) => {
  const { name, key, active } = value;
  const cls = active ? 'active' : '';
  return <div className={classnames('level-item', cls)} onMouseDown={onItemClick(key)}>{name}</div>;
});

const SortableItemGroup = SortableElement(({ value, onItemClick }) => {
  const {
    name, children, active, key,
  } = value;
  const cls = active ? 'active' : '';
  return (
    <div className={classnames('level-item group-names', cls)}>
      <div className="name" onMouseDown={onItemClick(key)}>{name}</div>
      <SortableList items={children} onItemClick={onItemClick} />
    </div>
  );
});

const SortableList = SortableContainer(({ items, onItemClick }) => (
  <div className="sort-container">
    {
      items.map((value, index) => {
        const { children, active } = value;
        if (children) {
          const { name, key, active } = value;
          const cls = active ? 'active' : '';
          return (
            <SortableItemGroup key={`item-${index}`} index={index} value={value} onItemClick={onItemClick} />
          );
        }
        return (
          <SortableItem key={`item-${index}`} index={index} value={value} onItemClick={onItemClick} />
        );
      })
    }
  </div>
));

let multiple = false;

class LevelManage extends React.Component {
  componentDidMount() {
    hotkeys('m', { keyup: true, keydown: true }, (event, handler) => {
      // Prevent the default refresh event under WINDOWS system
      if (event.type === 'keydown') {
        multiple = true;
      } else {
        multiple = false;
      }
    });
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { list, dispatch } = this.props;
    const pages = arrayMove(list, oldIndex, newIndex).map(it => it.key);
    dispatch(resortPageItem(pages));
  }

  onItemClick = key => () => {
    const { dispatch, activeEditKey } = this.props;
    if (multiple) {
      dispatch(addActiveEditKey(key));
    } else {
      dispatch(changeActiveEditKey(key));
    }
  }

  onGroup = () => {
    const { dispatch } = this.props;
    dispatch(groupActiveEditKeys());
  }

  render() {
    const { list } = this.props;
    return (
      <div className="component-level-manage-container">
        <div onClick={this.onGroup}>分组</div>
        <SortableList
          items={list}
          onItemClick={this.onItemClick}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const {
    pages, activePage, editList, activeEditKey, groupList,
  } = state;
  const list = [];
  pages[activePage].forEach((it, index) => {
    if (groupList[it]) {
      list.push({
        name: editList[it].name,
        key: it,
        active: activeEditKey.indexOf(it) > -1,
        children: groupList[it].map(item => ({
          name: editList[item].name,
          key: item,
          active: activeEditKey.indexOf(item) > -1,
        })),
      });
    } else {
      list.push({
        name: editList[it].name,
        key: it,
        active: activeEditKey.indexOf(it) > -1,
      });
    }
  });
  const result = { list, activeEditKey };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(LevelManage);
