/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getComponentEditMap } from '@lzshow/core';
import {
  ALL_ITEM, ITEM_TYPE_GROUP,
} from '@lzshow/constants';
import {
  startMove, changeActiveEditKey,
} from '../../store/action';

class GroupItem extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      uniqueId: PropTypes.string.isRequired,
    }

    constructor(props) {
      super(props);
      this.magicRefs = {};
      this.shiftDown = false;
    }

    onClikItem = (e) => {
      e.stopPropagation();
      const { dispatch, uniqueId } = this.props;
      dispatch(changeActiveEditKey(uniqueId));
    }

    onStartMove = (e) => {
      // 如果资源触发此事件，禁用事件
      if (e.cancelMove) {
        delete e.cancelMove;
        return;
      }
      const {
        dispatch, list, editList, uniqueId, activeEditKey, groupList,
      } = this.props;
      // 检测激活态是否包含此唯一标识
      if (activeEditKey.indexOf(uniqueId) === -1) return;
      // const { rect } = editList[uniqueId];
      const rectMap = {};
      // list.forEach((it) => { rectMap[it] = Object.assign({}, editList[it].rect); });

      const groupKeys = {};
      activeEditKey.forEach((it) => {
        const item = editList[it];
        const { rect, belong, nodeType } = item;
        if (nodeType === ITEM_TYPE_GROUP) {
          groupKeys[it] = Object.assign({}, rect);
        } else if (belong) {
          groupKeys[belong] = Object.assign({}, editList[belong].rect);
        } else {
          rectMap[it] = Object.assign({}, rect);
        }
      });

      Object.keys(groupKeys).forEach((k) => {
        const groupItem = editList[k];
        const itemList = groupList[k];
        itemList.forEach((itemKey) => {
          const item = editList[itemKey];
          const { rect } = item;
          rectMap[itemKey] = Object.assign({}, rect, {
            top: groupItem.rect.top + rect.top,
            left: groupItem.rect.left + rect.left,
          });
        });
      });

      dispatch(startMove({ key: ALL_ITEM, rectMap }));
    }

    // 设置魔术引用
    setMagicRefs = name => (r) => { this.magicRefs[name] = r; }

    render() {
      const {
        list, uniqueId, ...otherProps
      } = this.props;
      const {
        editList, dispatch, activeEditKey, activePage, groupList, actions,
      } = otherProps;
      const { rect } = editList[uniqueId];
      const {
        height, width, left, top, rotate,
      } = rect;
      return (
        <div
          className="group-item"
          onClick={this.onClikItem}
          onMouseDown={this.onStartMove}
          style={{
            height,
            width,
            left,
            top,
            position: 'absolute',
            transform: `rotate(${rotate}deg)`,
          }}
        >
          {
            list.map((item) => {
              const { type, nodeType, ...others } = editList[item];
              if (nodeType === ITEM_TYPE_GROUP) {
                return (
                  <GroupItem
                    editList={editList}
                    dispatch={dispatch}
                    activeEditKey={activeEditKey}
                    activePage={activePage}
                    groupList={groupList}
                    actions={actions}
                    uniqueId={item}
                    key={item}
                    list={groupList[item]}
                  />
                );
              }
              const Comp = getComponentEditMap(type);
              return (
                <Comp
                  editList={editList}
                  dispatch={dispatch}
                  activeEditKey={activeEditKey}
                  activePage={activePage}
                  groupList={groupList}
                  actions={actions}
                  uniqueId={item}
                  key={item}
                  data={others}
                />
              );
            })
          }
        </div>
      );
    }
}

export default GroupItem;
