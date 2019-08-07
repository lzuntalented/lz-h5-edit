/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import hotkeys from 'hotkeys-js';
import {
  ALL_ITEM,
} from '../../core/constants';
import {
  startMove, resetContentHeight, changeActiveEditKey, addAttrs, changeAttrs, addActiveEditKey,
} from '../../store/action';

import './index.scss';

const refNames = {
  content: 'content',
};

let shiftDown = false;
hotkeys('a', (event) => {
  const { type } = event;
  if (type === 'keydown') {
    shiftDown = true;
  } else {
    shiftDown = false;
  }
});

export default function (Component) {
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
      this.resetHeight();
    }

    onClikItem = (e) => {
      e.stopPropagation();
      const { dispatch, uniqueId } = this.props;
      if (shiftDown) {
        dispatch(addActiveEditKey(uniqueId));
      } else {
        dispatch(changeActiveEditKey(uniqueId));
      }
    }

    onStartMove = (e) => {
      const { dispatch, data, activeEditKey } = this.props;
      if (activeEditKey.length === 0) return;
      e.cancelMove = true;
      dispatch(startMove({ key: ALL_ITEM, rect: data.rect }));
    }

    // 重置高度
    resetHeight = () => {
      const { dispatch, uniqueId } = this.props;
      const elem = this.magicRefs[refNames.content];
      if (elem) {
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
        rect, animate, attrs,
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
            >
              <Component
                resetHeight={this.resetHeight}
                registerAttrs={this.registerAttrs}
                setAttribute={this.setAttribute}
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
    const { activeEditKey } = state;
    return { activeEditKey };
  };
  const mapDispatchToProps = dispatch => ({ dispatch });
  return connect(mapStateToProps, mapDispatchToProps)(Layout);
}
