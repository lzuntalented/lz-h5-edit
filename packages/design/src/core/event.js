import hotkeys from 'hotkeys-js';
import {
  QUADRANT_SECOND, QUADRANT_FIRST, QUADRANT_THREE, QUADRANT_FOUR,
  POINT_LEFT_CENTER,
  POINT_RIGHT_CENTER, POINT_TOP_CENTER, POINT_BOTTOM_CENTER, ALL_ITEM, POINT_LEFT_TOP,
  POINT_RIGHT_BOTTOM, POINT_RIGHT_TOP, POINT_LEFT_BOTTOM, POINT_ROTATE,
} from '@lzshow/constants';

import { subscribe, dispatch } from '../store';
import { checkQuadrant } from '../utils/index';
import { change, endMove, removeItem } from '../store/action';

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

function onMouseDown(e) {
  if (moveTag) {
    e.preventDefault();
    coordStart.x = e.pageX;
    coordStart.y = e.pageY;
  }
}

function onMouseMove(e) {
  e.preventDefault();
  if (moveTag) {
    const { key: flag } = moveTag;
    // e.stopPropagation();

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
    } else if (flag === POINT_LEFT_TOP) {
      distance = Math.min(Math.abs(coordStart.x - coordEnd.x), Math.abs(coordStart.y - coordEnd.y));
      if (quadrant === QUADRANT_FOUR) {
        dispatch(change({ distance: -distance }));
      } else if (quadrant === QUADRANT_SECOND) {
        dispatch(change({ distance }));
      }
    } else if (flag === POINT_RIGHT_BOTTOM) {
      distance = Math.min(Math.abs(coordStart.x - coordEnd.x), Math.abs(coordStart.y - coordEnd.y));
      if (quadrant === QUADRANT_FOUR) {
        dispatch(change({ distance }));
      } else if (quadrant === QUADRANT_SECOND) {
        dispatch(change({ distance: -distance }));
      }
    } else if (flag === POINT_RIGHT_TOP) {
      distance = Math.min(Math.abs(coordStart.x - coordEnd.x), Math.abs(coordStart.y - coordEnd.y));
      if (quadrant === QUADRANT_FIRST) {
        dispatch(change({ distance }));
      } else if (quadrant === QUADRANT_THREE) {
        dispatch(change({ distance: -distance }));
      }
    } else if (flag === POINT_LEFT_BOTTOM) {
      distance = Math.min(Math.abs(coordStart.x - coordEnd.x), Math.abs(coordStart.y - coordEnd.y));
      if (quadrant === QUADRANT_FIRST) {
        dispatch(change({ distance: -distance }));
      } else if (quadrant === QUADRANT_THREE) {
        dispatch(change({ distance }));
      }
    } else if (flag === POINT_ROTATE) {
      dispatch(change({
        coordStart,
        coordEnd,
      }));
    }
  }
}

function onMouseUp() {
  if (moveTag) {
    const key = moveTag;
    moveTag = false;
    dispatch(endMove(key));
  }
}

export default function addEventListener() {
  window.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
  window.addEventListener('mousecancel', onMouseUp);
  return () => {
    window.removeEventListener('mousedown', onMouseDown);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('mousecancel', onMouseUp);
  };
}

// let shiftDown = false;
hotkeys('backspace', () => {
  dispatch(removeItem());
});

subscribe('moveTag', (tag) => { moveTag = tag; });
