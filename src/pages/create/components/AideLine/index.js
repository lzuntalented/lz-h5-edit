/**
 * 辅助线
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ITEM_TYPE_GROUP,
} from '../../../../core/constants';
import { isUndefined } from '../../../../utils/Tools';
import { winSize } from '../../../../utils';

class Phone extends React.Component {
    static propTypes = {
      editList: PropTypes.object.isRequired,
      groupList: PropTypes.object.isRequired,
      activeEditKey: PropTypes.array.isRequired,
      currentList: PropTypes.array.isRequired,
    }

    /**
     * 获取可绘制辅助线列表
     */
    getAideLines() {
      const currentShowList = this.calcCurrentShowItems();
      const {
        editList, activeEditKey,
      } = this.props;
      const result = [];
      //   坐标误差内，显示辅助线
      const wu = 5;
      activeEditKey.forEach((key) => {
        const it = editList[key];
        const { belong } = it;
        const rect = Object.assign({}, it.rect);
        if (belong) {
          const groupItem = editList[belong];
          rect.left = groupItem.rect.left + rect.left;
          rect.top = groupItem.rect.top + rect.top;
        }

        currentShowList.forEach(({ left, top, key: k }) => {
          if (k === belong) { return; }
          if (Math.abs(rect.left - left) <= wu) {
            //   超出编辑器不绘制
            if (left >= 0 && left <= winSize.width) {
              result.push({ left });
            }
          }
          if (Math.abs(rect.top - top) <= wu) {
            // 超出编辑器不绘制
            if (top >= 0 && top <= winSize.height) {
              result.push({ top });
            }
          }
        });
      });
      return result;
    }

    /**
     * 计算当前活动页面中，各元素坐标
     */
    calcCurrentShowItems() {
      const {
        editList, groupList, currentList, activeEditKey,
      } = this.props;
      const result = [];
      currentList.forEach((key) => {
        if (activeEditKey.indexOf(key) > -1) return;
        const item = editList[key];
        const { rect, nodeType } = item;
        // 仅绘制顶部和左侧对齐
        result.push({
          key,
          left: rect.left,
          top: rect.top,
        });
        // 组元素，需要把子元素逐个转换成相对编辑器坐标
        if (nodeType === ITEM_TYPE_GROUP) {
          groupList[key].forEach((k) => {
            if (activeEditKey.indexOf(k) > -1) return;
            const it = editList[k];
            result.push({
              key: k,
              left: rect.left + it.left,
              top: rect.top + it.top,
            });
          });
        }
      });
      return result;
    }

    render() {
      const list = this.getAideLines();
      return (
        <div className="home-aideline-container">
          {
              list.map(({ left, top }, index) => (!isUndefined(left) ? <div key={index} className="aide-left" style={{ left }} /> : <div key={index} className="aide-top" style={{ top }} />))
          }
        </div>
      );
    }
}

const mapStateToProps = (store) => {
  const state = store.toJS();
  const {
    editList, groupList, activeEditKey, pages, activePage,
  } = state;
  const result = {
    editList, groupList, activeEditKey, currentList: pages[activePage],
  };
  return result;
};

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Phone);
