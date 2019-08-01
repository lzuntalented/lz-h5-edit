import React from 'react';
import { connect } from 'react-redux';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

import './index.scss';
import { changeActiveEditKey, resortPageItem, groupActiveEditKeys } from '../../store/action';

const SortableItem = SortableElement(({ value }) => {
  const { name, key, active } = value;
  const cls = active ? 'active' : '';
  return <li className={cls}>{name}</li>;
});

const SortableList = SortableContainer(({ items }) => (
  <ul>
    {items.map((value, index) => (
      <SortableItem key={`item-${index}`} index={index} value={value} />
    ))}
  </ul>
));

class LevelManage extends React.Component {
  onSortEnd = ({ oldIndex, newIndex }) => {
    const { list, dispatch } = this.props;
    const pages = arrayMove(list, oldIndex, newIndex).map(it => it.key);
    dispatch(resortPageItem(pages));
  }

  onItemClick = (e) => {
    const { index } = e;
    const { dispatch, list } = this.props;
    const key = list[index].key;
    dispatch(changeActiveEditKey(key));
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
          onSortStart={this.onItemClick}
          onSortEnd={this.onSortEnd}
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
      list.push(groupList[it].map(item => ({
        name: editList[it].name,
        key: item,
        active: activeEditKey.indexOf(item) > -1,
      })));
    } else {
      list.push({
        name: editList[it].name,
        key: it,
        active: activeEditKey.indexOf(it) > -1,
      });
    }
  });
  const result = { list };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(LevelManage);
