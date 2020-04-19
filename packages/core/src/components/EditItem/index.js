/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
// import hotkeys from 'hotkeys-js';
import {
  ALL_ITEM, ITEM_TYPE_GROUP,
} from '@lzshow/constants';
import PreviewAnimation from '../PreviewAnimation';

import './index.scss';

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

export default function (Component) {
  // 唯一id
  // const uniqueId = createId();
  class Layout extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      data: PropTypes.object.isRequired,
      uniqueId: PropTypes.string.isRequired,
      activeEditKey: PropTypes.array.isRequired,
      editList: PropTypes.object.isRequired,
      groupList: PropTypes.object.isRequired,
      actions: PropTypes.object.isRequired,
    }

    constructor(props) {
      super(props);
      const { actions } = props;
      this.magicRefs = {};
      this.shiftDown = false;
      this.actions = actions;
    }

    componentDidMount() {
    }

    onClikItem = (e) => {
      e.stopPropagation();
      const { dispatch, uniqueId } = this.props;
      const { changeActiveEditKey } = this.actions;
      // 暂不提供多选功能
      // if (shiftDown) {
      //   dispatch(addActiveEditKey(uniqueId));
      // } else {
      dispatch(changeActiveEditKey(uniqueId));
      // }
    }

    onStartMove = (e) => {
      const { startMove } = this.actions;
      // e.preventDefault();
      const {
        dispatch, activeEditKey, uniqueId, editList, groupList,
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
          rectMap[itemKey] = Object.assign({}, rect, {
            top: groupItem.rect.top + rect.top,
            left: groupItem.rect.left + rect.left,
          });
        });
      });

      dispatch(startMove({ key: ALL_ITEM, rectMap }));
    }

    // 重置高度
    resetHeight = (h) => {
      const { resetContentHeight } = this.actions;
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
      const { addAttrs } = this.actions;
      const { dispatch, uniqueId, data } = this.props;
      if (Object.keys(data.attrs).length === 0) {
        dispatch(addAttrs(attrs, uniqueId));
      }
    }

    setAttribute = (attrs) => {
      const { changeAttrs } = this.actions;
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

    emptyAnimates = () => {
      const { emptyAnimate } = this.actions;
      const { dispatch } = this.props;
      dispatch(emptyAnimate());
    }

    render() {
      const { data } = this.props;
      const {
        rect, attrs, border = {}, previewAnimates = [],
      } = data;
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
          <PreviewAnimation
            list={previewAnimates}
            className={contentCls}
            style={animateStyle}
            emptyAnimates={this.emptyAnimates}
          >
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
          </PreviewAnimation>
        </div>
      );
    }
  }

  return Layout;
}
