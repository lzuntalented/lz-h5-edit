/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  POINT_LEFT_CENTER, POINT_RIGHT_CENTER, POINT_TOP_CENTER, POINT_BOTTOM_CENTER, ALL_ITEM, POINT_LEFT_TOP, POINT_RIGHT_TOP, POINT_LEFT_BOTTOM, POINT_RIGHT_BOTTOM, POINT_ROTATE,
} from './constants';
import './event';

import './index.scss';
import { createId } from '../../utils/IDManage';
import {
  createItemStore, startMove, resetContentHeight, changeActiveEditKey, addAttrs, changeAttrs, saveMoveTagBoundingClientRect,
} from './action';

const refNames = {
  content: 'content',
};

export default function (Component, type) {
  // 唯一id
  // const uniqueId = createId();
  class Layout extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      activeEditKey: PropTypes.string,
    }

    constructor(props) {
      super(props);
      const { dispatch } = props;
      this.magicRefs = {};
      this.childDownFlag = false;
      // dispatch(createItemStore({ uniqueId, type }));
    }

    componentDidMount() {
      this.resetHeight();
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

    onScale = flag => (e) => {
      const { dispatch, activeEditKey, uniqueId } = this.props;
      if (activeEditKey !== uniqueId) {
        e.preventDefault();
        dispatch(changeActiveEditKey(uniqueId));
        return;
      }
      const elem = e.target;
      const key = elem.getAttribute('data-key');
      if (key) {
        if (key === POINT_ROTATE) {
          dispatch(saveMoveTagBoundingClientRect(e.currentTarget.getBoundingClientRect()));
        }
        dispatch(startMove(key));
      } else {
        dispatch(startMove(flag));
      }
    }

    // 设置魔术引用
    setMagicRefs = name => (r) => { this.magicRefs[name] = r; }

    setChildDownFLag = () => {
      this.childDownFlag = false;
    }

    setAttrs = (attrs) => {
      const { dispatch, uniqueId } = this.props;
      dispatch(addAttrs(attrs, uniqueId));
    }

    setAttribute = (attrs) => {
      const { dispatch, uniqueId } = this.props;
      dispatch(changeAttrs(attrs, uniqueId));
    }

    onKeyUp = () => {
      console.log('onkey up');
      const { dispatch } = this.props;
      dispatch(removeItem());
    }

    render() {
      const {
        activeEditKey, uniqueId, editList,
      } = this.props;
      const {
        width, left, top, height, rotate, attrs,
        animate,
      } = editList[uniqueId].current;
      const cls = activeEditKey === uniqueId ? 'edit-item' : 'edit-item edit-item-not-active';
      const contentCls = `content-hide-container ${animate || ''}`;
      return (
        <div
          className={cls}
          onMouseDown={this.onScale(ALL_ITEM, false)}
          style={{
            width,
            left,
            top,
            height,
            transform: `rotate(${rotate}deg)`,
          }}
        >
          {
            activeEditKey === uniqueId
            && (
              <ul className="ctrl-container">
                <li className="line l" />
                <li className="line r" />
                <li className="line t" />
                <li className="line b" />
                <li className="line link-rotate" />
                <li
                  className="point lc"
                  data-key={POINT_LEFT_CENTER}
                />
                <li
                  className="point rc"
                  data-key={POINT_RIGHT_CENTER}
                />
                <li
                  className="point tc"
                  data-key={POINT_TOP_CENTER}
                />
                <li
                  className="point bc"
                  data-key={POINT_BOTTOM_CENTER}
                />
                <li
                  className="point lt"
                  data-key={POINT_LEFT_TOP}
                />
                <li
                  className="point rt"
                  data-key={POINT_RIGHT_TOP}
                />
                <li
                  className="point lb"
                  data-key={POINT_LEFT_BOTTOM}
                />
                <li
                  className="point rb"
                  data-key={POINT_RIGHT_BOTTOM}
                />
                <li
                  className="point rotate"
                  data-key={POINT_ROTATE}
                />
              </ul>
            )
          }
          <div className={contentCls}>
            <div
              className="content-container"
              ref={this.setMagicRefs(refNames.content)}
            >
              <Component
                resetHeight={this.resetHeight}
                setAttrs={this.setAttrs}
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
    const { editList, activeEditKey } = state;
    // const item = editList[uniqueId];
    const result = { activeEditKey, editList };
    // if (item) return Object.assign(result, editList);
    return result;
  };

  const mapDispatchToProps = dispatch => ({ dispatch });
  return connect(mapStateToProps, mapDispatchToProps)(Layout);
}
