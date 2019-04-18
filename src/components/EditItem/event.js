import {
  QUADRANT_SECOND, QUADRANT_FIRST, QUADRANT_THREE, QUADRANT_FOUR, POINT_LEFT_CENTER, MOVE_CHANGE, MOVE_END, POINT_RIGHT_CENTER, POINT_TOP_CENTER, POINT_BOTTOM, POINT_BOTTOM_CENTER, ALL_ITEM,
} from './constants';
import { subscribe, dispatch } from '../../store';
import { checkQuadrant } from '../../utils/index';
import { change, endMove } from './action';

// 正在移动标识
let moveTag = false;

// 开始点击坐标点
const coordStart = {
  x: 0,
  y: 0,
};

// 当前坐标点
const coordEnd = {
  x: 0,
  y: 0,
};

window.addEventListener('mousedown', (e) => {
  if (moveTag) {
    coordStart.x = e.pageX;
    coordStart.y = e.pageY;
  }
}, false);

window.addEventListener('mousemove', (e) => {
  if (moveTag) {
    const flag = moveTag;
    // e.stopPropagation();
    e.preventDefault();

    coordEnd.x = e.pageX;
    coordEnd.y = e.pageY;

    const quadrant = checkQuadrant(coordEnd, coordStart);
    const pos = Math.abs(coordStart.x - coordEnd.x);
    const yDistance = Math.abs(coordStart.y - coordEnd.y);
    let distance = 0;
    if (flag === POINT_LEFT_CENTER) {
      if (quadrant === QUADRANT_FIRST || quadrant === QUADRANT_FOUR) {
        distance = -pos;
      } else {
        distance = pos;
      }
      dispatch(change({ distance }));
    } else if (flag === POINT_RIGHT_CENTER) {
      if (quadrant === QUADRANT_FIRST || quadrant === QUADRANT_FOUR) {
        distance = pos;
      } else {
        distance = -pos;
      }
      dispatch(change({ distance }));
    } else if (flag === POINT_TOP_CENTER) {
      if (quadrant === QUADRANT_FIRST || quadrant === QUADRANT_SECOND) {
        distance = yDistance;
      } else {
        distance = -yDistance;
      }
      dispatch(change({ distance }));
    } else if (flag === POINT_BOTTOM_CENTER) {
      if (quadrant === QUADRANT_FIRST || quadrant === QUADRANT_SECOND) {
        distance = -yDistance;
      } else {
        distance = yDistance;
      }
      dispatch(change({ distance }));
    } else if (flag === ALL_ITEM) {
      dispatch(change({
        x: coordEnd.x - coordStart.x,
        y: coordEnd.y - coordStart.y,
      }));
    }
  }
});

window.addEventListener('mouseup', () => {
  if (moveTag) {
    const key = moveTag;
    moveTag = false;
    dispatch(endMove(key));
  }
});

window.addEventListener('mousecancel', () => {
  if (moveTag) {
    const key = moveTag;
    moveTag = false;
    dispatch(endMove(key));
  }
});

subscribe('moveTag', (tag) => { moveTag = tag; });
