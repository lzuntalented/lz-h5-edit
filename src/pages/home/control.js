import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  POINT_LEFT_CENTER, POINT_RIGHT_CENTER, POINT_TOP_CENTER, POINT_BOTTOM_CENTER,
  POINT_LEFT_TOP, POINT_RIGHT_TOP, POINT_LEFT_BOTTOM, POINT_RIGHT_BOTTOM, POINT_ROTATE,
  ALL_ITEM,
} from '../../core/constants';
import { changeActiveEditKey, saveMoveTagBoundingClientRect, startMove } from '../../store/action';
import './event';

// 引入样式文件
import './index.scss';

class Phone extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      editList: PropTypes.object.isRequired,
      groupList: PropTypes.object.isRequired,
      activeEditKey: PropTypes.array.isRequired,
    }

    constructor(props) {
      super(props);
      this.state = {};
    }

    onScale = (flag, uniqueId, group = false) => (e) => {
      const {
        dispatch, activeEditKey, editList, groupList,
      } = this.props;
      // if (activeEditKey.length === 0) {
      //   e.preventDefault();
      //   dispatch(changeActiveEditKey(uniqueId));
      //   return;
      // }
      const elem = e.target;
      const key = elem.getAttribute('data-key');
      const rect = {};
      if (group) {
        let left = 0;
        let top = 0;
        let width = 0;
        let height = 0;
        groupList[group].forEach((it, index) => {
          const item = editList[uniqueId];
          const itemRect = item.rect;
          if (index === 0) {
            /* eslint-disable-next-line prefer-destructuring */
            left = itemRect.left;
            /* eslint-disable-next-line prefer-destructuring */
            top = itemRect.top;
            /* eslint-disable-next-line prefer-destructuring */
            width = itemRect.width;
            /* eslint-disable-next-line prefer-destructuring */
            height = itemRect.height;
          } else {
            left = Math.min(left, itemRect.left);
            top = Math.min(top, itemRect.top);
            width = Math.max(width, itemRect.width);
            height = Math.max(height, itemRect.height);
          }
        });
        rect.left = left;
        rect.top = top;
        rect.width = width;
        rect.height = height;
      } else {
        const item = editList[uniqueId];
        Object.assign(rect, item.rect);
      }
      if (key) {
        const obj = { key, rect };
        if (key === POINT_ROTATE) {
          obj.boundRect = e.currentTarget.getBoundingClientRect();
          // dispatch(saveMoveTagBoundingClientRect(e.currentTarget.getBoundingClientRect()));
        }
        dispatch(startMove(obj));
      } else {
        dispatch(startMove({ key: flag, rect }));
      }
    }

    getGroupRect(group) {
      const { editList } = this.props;
      const rect = {};
      let left = 0;
      let top = 0;
      let width = 0;
      let height = 0;
      group.forEach((uniqueId, index) => {
        const item = editList[uniqueId];
        const itemRect = item.rect;
        if (index === 0) {
          /* eslint-disable-next-line prefer-destructuring */
          left = itemRect.left;
          /* eslint-disable-next-line prefer-destructuring */
          top = itemRect.top;
          /* eslint-disable-next-line prefer-destructuring */
          width = itemRect.width + left;
          /* eslint-disable-next-line prefer-destructuring */
          height = itemRect.height + top;
        } else {
          left = Math.min(left, itemRect.left);
          top = Math.min(top, itemRect.top);
          width = Math.max(width + left, itemRect.width);
          height = Math.max(height + top, itemRect.height);
        }
      });
      rect.left = left;
      rect.top = top;
      rect.width = width - left;
      rect.height = height - top;
      return rect;
    }

    render() {
      const { editList, groupList, activeEditKey } = this.props;
      const items = [];
      activeEditKey.forEach((it) => {
        const group = groupList[it];
        if (group) {
          items.push(
            {
              group: true,
              uniqueId: it,
              data: { rect: this.getGroupRect(group) },
            },
          );
        } else {
          items.push({
            uniqueId: it,
            data: editList[it],
          });
        }
      });
      return (
        <div className="home-control-container">
          {
            items.map((it) => {
              const { uniqueId, data, group } = it;
              const { rect } = data;
              const {
                top,
                left,
                width,
                height,
                rotate,
              } = rect;
              return (
                <ul
                  className="ctrl-container"
                  key={uniqueId}
                  onMouseDown={this.onScale(ALL_ITEM, uniqueId, group)}
                  style={{
                    position: 'absolute',
                    width,
                    left,
                    top,
                    transform: `rotate(${rotate}deg)`,
                  }}
                >
                  <li className="line t">
                    <li
                      className="point tc"
                      data-key={POINT_TOP_CENTER}
                    />
                  </li>
                  <li className="line b" style={{ top: height - 2 }}>
                    <li
                      className="point bc"
                      data-key={POINT_BOTTOM_CENTER}
                    />
                  </li>
                  <li className="line l" style={{ height }}>
                    <li
                      className="point lc"
                      data-key={POINT_LEFT_CENTER}
                    />
                    <li
                      className="point lt"
                      data-key={POINT_LEFT_TOP}
                    />
                    <li
                      className="point lb"
                      data-key={POINT_LEFT_BOTTOM}
                    />
                  </li>
                  <li className="line r" style={{ height }}>
                    <li
                      className="point rc"
                      data-key={POINT_RIGHT_CENTER}
                    />
                    <li
                      className="point rt"
                      data-key={POINT_RIGHT_TOP}
                    />
                    <li
                      className="point rb"
                      data-key={POINT_RIGHT_BOTTOM}
                    />
                  </li>
                  <li className="line link-rotate" />
                  <li
                    className="point rotate"
                    data-key={POINT_ROTATE}
                  />
                </ul>
              );
            })
        }
        </div>
      );
    }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const {
    editList, groupList, activeEditKey,
  } = state;
  const result = {
    editList, groupList, activeEditKey,
  };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Phone);
