/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import hotkeys from 'hotkeys-js';
import {
  ALL_ITEM, ITEM_TYPE_GROUP,
} from '../../core/constants';
import {
  startMove, resetContentHeight, changeActiveEditKey, addAttrs, changeAttrs,
} from '../../store/action';

import './index.scss';
import { getDefaultAttrs } from '../../utils/Tools';

const refNames = {
  content: 'content',
};

// let shiftDown = false;
// hotkeys('a', (event) => {
//   const { type } = event;
//   if (type === 'keydown') {
//     shiftDown = true;
//   } else {
//     shiftDown = false;
//   }
// });

export default function (Component, config) {
  // 唯一id
  // const uniqueId = createId();
  class Layout extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      data: PropTypes.object.isRequired,
      uniqueId: PropTypes.string.isRequired,
    }

    constructor(props) {
      super(props);
      this.magicRefs = {};
      this.shiftDown = false;
    }

    componentDidMount() {
    }

    onClikItem = (e) => {
      e.stopPropagation();
      const { dispatch, uniqueId } = this.props;
      // 暂不提供多选功能
      // if (shiftDown) {
      //   dispatch(addActiveEditKey(uniqueId));
      // } else {
      dispatch(changeActiveEditKey(uniqueId));
      // }
    }

    onStartMove = (e) => {
      // e.preventDefault();
      const {
        dispatch, data, activeEditKey, uniqueId, editList, groupList,
      } = this.props;
      if (activeEditKey.indexOf(uniqueId) === -1) return;
      e.cancelMove = true;

      const rectMap = {};
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
          rectMap[itemKey] = Object.assign({}, rect, { top: groupItem.rect.top + rect.top, left: groupItem.rect.left + rect.left });
        });
      });

      dispatch(startMove({ key: ALL_ITEM, rectMap }));
    }

    // 重置高度
    resetHeight = (h) => {
      const { dispatch, uniqueId } = this.props;
      const elem = this.magicRefs[refNames.content];
      if (h) {
        dispatch(resetContentHeight({ height: h, key: uniqueId }));
      } else if (elem) {
        const height = elem.clientHeight;
        dispatch(resetContentHeight({ height, key: uniqueId }));
      }
    }

    // 设置魔术引用
    setMagicRefs = name => (r) => { this.magicRefs[name] = r; }

    registerAttrs = (attrs) => {
      const { dispatch, uniqueId, data } = this.props;
      if (Object.keys(data.attrs).length === 0) {
        dispatch(addAttrs(attrs, uniqueId));
      }
    }

    setAttribute = (attrs) => {
      const { dispatch, uniqueId } = this.props;
      dispatch(changeAttrs(attrs, uniqueId));
    }

    onKeyUp = () => {
      const { dispatch } = this.props;
      console.log(this.shiftDown, 'onKeyUp');
      // dispatch(removeItem());
      this.shiftDown = false;
    }

    onKeyDown = () => {
      const { dispatch } = this.props;
      console.log(this.shiftDown, 'onKeyDown');
      // dispatch(removeItem());
      this.shiftDown = true;
    }

    render() {
      const { data } = this.props;
      const {
        rect, animate, attrs, border = {},
      } = data;
      const {
        name, duration, delay, repeat,
      } = animate;
      const {
        top,
        left,
        width,
        height,
        rotate,
      } = rect;
      // 内容区样式
      const contentCls = 'content-hide-container';
      const animateStyle = {
        animation: `${duration}s ease ${delay}s ${repeat} normal both running ${name}`,
        borderStyle: border.style,
        borderWidth: border.width,
        borderColor: border.color,
        borderRadius: border.radius,
      };
      return (
        <div
          onMouseDown={this.onStartMove}
          onClick={this.onClikItem}
          className="edit-item"
          style={{
            width,
            left,
            top,
            height,
            transform: `rotate(${rotate}deg)`,
          }}
        >
          <div className={contentCls} style={animateStyle}>
            <div
              className="content-container"
              ref={this.setMagicRefs(refNames.content)}
              style={{ height }}
            >
              <Component
                resetHeight={this.resetHeight}
                registerAttrs={this.registerAttrs}
                setAttribute={this.setAttribute}
                defaultAttrs={this.defaultAttrs}
                {...attrs}
              />
            </div>
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = (store) => {
    const state = store.toJS();
    const { activeEditKey, editList, groupList } = state;
    return { activeEditKey, editList, groupList };
  };
  const mapDispatchToProps = dispatch => ({ dispatch });
  return connect(mapStateToProps, mapDispatchToProps)(Layout);
}
