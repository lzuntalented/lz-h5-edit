"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _hotkeysJs = _interopRequireDefault(require("hotkeys-js"));

var _constants = require("./constants");

var _store = require("../store");

var _index = require("../utils/index");

var _action = require("../store/action");

// 正在移动标识
var moveTag = false; // 开始点击坐标点

var coordStart = {
  x: 0,
  y: 0
}; // 当前坐标点

var coordEnd = {
  x: 0,
  y: 0
};
window.addEventListener('mousedown', function (e) {
  if (moveTag) {
    e.preventDefault();
    coordStart.x = e.pageX;
    coordStart.y = e.pageY;
  }
}, false);
window.addEventListener('mousemove', (0, _index.debounce)(function (e) {
  e.preventDefault();

  if (moveTag) {
    var _moveTag = moveTag,
        flag = _moveTag.key; // e.stopPropagation();

    coordEnd.x = e.pageX;
    coordEnd.y = e.pageY;
    var quadrant = (0, _index.checkQuadrant)(coordEnd, coordStart);
    var pos = Math.abs(coordStart.x - coordEnd.x);
    var yDistance = Math.abs(coordStart.y - coordEnd.y);
    var distance = 0;

    if (flag === _constants.POINT_LEFT_CENTER) {
      if (quadrant === _constants.QUADRANT_FIRST || quadrant === _constants.QUADRANT_FOUR) {
        distance = -pos;
      } else {
        distance = pos;
      }

      (0, _store.dispatch)((0, _action.change)({
        distance: distance
      }));
    } else if (flag === _constants.POINT_RIGHT_CENTER) {
      if (quadrant === _constants.QUADRANT_FIRST || quadrant === _constants.QUADRANT_FOUR) {
        distance = pos;
      } else {
        distance = -pos;
      }

      (0, _store.dispatch)((0, _action.change)({
        distance: distance
      }));
    } else if (flag === _constants.POINT_TOP_CENTER) {
      if (quadrant === _constants.QUADRANT_FIRST || quadrant === _constants.QUADRANT_SECOND) {
        distance = yDistance;
      } else {
        distance = -yDistance;
      }

      (0, _store.dispatch)((0, _action.change)({
        distance: distance
      }));
    } else if (flag === _constants.POINT_BOTTOM_CENTER) {
      if (quadrant === _constants.QUADRANT_FIRST || quadrant === _constants.QUADRANT_SECOND) {
        distance = -yDistance;
      } else {
        distance = yDistance;
      }

      (0, _store.dispatch)((0, _action.change)({
        distance: distance
      }));
    } else if (flag === _constants.ALL_ITEM) {
      (0, _store.dispatch)((0, _action.change)({
        x: coordEnd.x - coordStart.x,
        y: coordEnd.y - coordStart.y
      }));
    } else if (flag === _constants.POINT_LEFT_TOP) {
      distance = Math.min(Math.abs(coordStart.x - coordEnd.x), Math.abs(coordStart.y - coordEnd.y));

      if (quadrant === _constants.QUADRANT_FOUR) {
        (0, _store.dispatch)((0, _action.change)({
          distance: -distance
        }));
      } else if (quadrant === _constants.QUADRANT_SECOND) {
        (0, _store.dispatch)((0, _action.change)({
          distance: distance
        }));
      }
    } else if (flag === _constants.POINT_RIGHT_BOTTOM) {
      distance = Math.min(Math.abs(coordStart.x - coordEnd.x), Math.abs(coordStart.y - coordEnd.y));

      if (quadrant === _constants.QUADRANT_FOUR) {
        (0, _store.dispatch)((0, _action.change)({
          distance: distance
        }));
      } else if (quadrant === _constants.QUADRANT_SECOND) {
        (0, _store.dispatch)((0, _action.change)({
          distance: -distance
        }));
      }
    } else if (flag === _constants.POINT_RIGHT_TOP) {
      distance = Math.min(Math.abs(coordStart.x - coordEnd.x), Math.abs(coordStart.y - coordEnd.y));

      if (quadrant === _constants.QUADRANT_FIRST) {
        (0, _store.dispatch)((0, _action.change)({
          distance: distance
        }));
      } else if (quadrant === _constants.QUADRANT_THREE) {
        (0, _store.dispatch)((0, _action.change)({
          distance: -distance
        }));
      }
    } else if (flag === _constants.POINT_LEFT_BOTTOM) {
      distance = Math.min(Math.abs(coordStart.x - coordEnd.x), Math.abs(coordStart.y - coordEnd.y));

      if (quadrant === _constants.QUADRANT_FIRST) {
        (0, _store.dispatch)((0, _action.change)({
          distance: -distance
        }));
      } else if (quadrant === _constants.QUADRANT_THREE) {
        (0, _store.dispatch)((0, _action.change)({
          distance: distance
        }));
      }
    } else if (flag === _constants.POINT_ROTATE) {
      (0, _store.dispatch)((0, _action.change)({
        coordStart: coordStart,
        coordEnd: coordEnd
      }));
    }
  }
}, 5));
window.addEventListener('mouseup', function () {
  if (moveTag) {
    var key = moveTag;
    moveTag = false;
    (0, _store.dispatch)((0, _action.endMove)(key));
  }
});
window.addEventListener('mousecancel', function () {
  if (moveTag) {
    var key = moveTag;
    moveTag = false;
    (0, _store.dispatch)((0, _action.endMove)(key));
  }
}); // let shiftDown = false;

(0, _hotkeysJs["default"])('backspace', function (event) {
  var type = event.type;
  console.log('delete', type);
  (0, _store.dispatch)((0, _action.removeItem)()); // if (type === 'keydown') {
  //   shiftDown = true;
  // } else {
  //   shiftDown = false;
  // }
}); // window.addEventListener('keyup', (e) => {
//   const { keyCode } = e;
//   // 删除键
//   if (keyCode === 8) {
//     dispatch(removeItem());
//   }
// });

(0, _store.subscribe)('moveTag', function (tag) {
  moveTag = tag;
});