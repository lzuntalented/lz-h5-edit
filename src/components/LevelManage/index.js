import React from 'react';
import { connect } from 'react-redux';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

import './index.scss';
import { changeActiveEditKey, resortPageItem } from '../EditItem/action';

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

  render() {
    const { list } = this.props;
    return (
      <div className="component-level-manage-container">
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
    pages, activePage, editList, activeEditKey,
  } = state;
  const list = pages[activePage].map((it, index) => ({
    name: editList[it].name,
    key: it,
    active: it === activeEditKey,
  }));
  const result = { list };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(LevelManage);
