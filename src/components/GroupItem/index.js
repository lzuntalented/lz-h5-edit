/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ALL_ITEM,
} from '../../core/constants';
import {
  startMove, resetContentHeight, changeActiveEditKey, addAttrs, changeAttrs, addActiveEditKey,
} from '../../store/action';
import ComponentMap from '../../core/components';
import { getAroundRect } from '../../utils';

const refNames = {
  content: 'content',
};

class GroupItem extends React.Component {
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

    onClikItem = (e) => {
      e.stopPropagation();
      const { dispatch, uniqueId } = this.props;
      dispatch(changeActiveEditKey(uniqueId));
    }

    onStartMove = (e) => {
      console.log('this.onStartMove');
      const { dispatch, list, editList } = this.props;
      const rect = getAroundRect(list, editList);
      const rectMap = {};
      list.forEach((it) => { rectMap[it] = Object.assign({}, editList[it].rect); });
      dispatch(startMove({ key: ALL_ITEM, rect, rectMap }));
    }

    // 设置魔术引用
    setMagicRefs = name => (r) => { this.magicRefs[name] = r; }

    render() {
      const { list, editList } = this.props;
      const rect = getAroundRect(list, editList);
      const {
        height, width, left, top,
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
          }}
        >
          {
            list.map((item) => {
              const { type, ...others } = editList[item];
              const Comp = ComponentMap[type];
              return <Comp uniqueId={item} key={item} data={others} />;
            })
            }
        </div>
      );
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(GroupItem);
