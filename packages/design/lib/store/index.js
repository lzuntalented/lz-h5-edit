"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribe = subscribe;
exports.dispatch = dispatch;
exports["default"] = void 0;

var _redux = require("redux");

var _immutable = require("immutable");

var _HistoryStore = _interopRequireDefault(require("../utils/HistoryStore"));

var _reduce = _interopRequireDefault(require("./reduce"));

var _constants = require("@lzshow/constants");

// 可以回退的操作列表
var recordHistoryAction = [_constants.ACTION_COPY_ITEM, _constants.ACTION_COPY_PAGE, _constants.ACTION_DELETE_PAGE, _constants.ACTION_ADD_PAGE_ITEM_WITH_ATTRS, _constants.CHANGE_ACTIVE_EDIT_KEY, _constants.CHANGE_ACTIVE_PAGE, _constants.ADD_PAGE_ITEM, _constants.STORE_ADD_PAGE, _constants.STORE_INIT_TO_EDIT, _constants.MOVE_END, _constants.CHANGE_ITEM_BASE_STYLE, _constants.CHANGE_ANIMATION, _constants.REMOVE_ITEM, _constants.PAGE_ITEM_RESORT, _constants.STORE_GROUP_ACTIVE_EDIT_KEYS, _constants.STORE_GROUP_SPLIT, _constants.CHANGE_ITEM_ATTR]; // 合并多个reducer

var reducer = function reducer(store, action) {
  for (var i = 0, len = _reduce["default"].length; i < len; i += 1) {
    var func = _reduce["default"][i];
    var ret = func.call(null, store, action);

    if (ret) {
      if (recordHistoryAction.indexOf(action.type) > -1) {
        _HistoryStore["default"].push(ret.toJS());
      }

      return ret;
    }
  }

  return store;
}; // 默认全局状态树


var defaultStore = (0, _immutable.fromJS)({
  // 编辑组件列表
  editList: {// ftpdy8: {
    //   name: '文本 1',
    //   type: 'COMPONENT_TYPE_TEXT',
    //   nodeType: 'ITEM_TYPE_SINGLE',
    //   belong: 'p0q24p',
    //   rect: {
    //     top: 0,
    //     left: 0,
    //     width: 320,
    //     height: 40,
    //     rotate: 0,
    //   },
    //   animate: {
    //     name: '',
    //     duration: 1,
    //     delay: 0,
    //     repeat: 1,
    //   },
    //   attrs: {
    //     color: 'red',
    //     fontSize: 12,
    //     text: '双击编辑文本',
    //     bgColor: '',
    //     lineHeight: 1.5,
    //   },
    // },
    // upivzn: {
    //   name: '文本 2',
    //   type: 'COMPONENT_TYPE_TEXT',
    //   nodeType: 'ITEM_TYPE_SINGLE',
    //   belong: 'p0q24p',
    //   rect: {
    //     top: 72,
    //     left: 20,
    //     width: 320,
    //     height: 40,
    //     rotate: 0,
    //   },
    //   animate: {
    //     name: '',
    //     duration: 1,
    //     delay: 0,
    //     repeat: 1,
    //   },
    //   attrs: {
    //     color: 'red',
    //     fontSize: 12,
    //     text: '双击编辑文本',
    //     bgColor: '',
    //     lineHeight: 1.5,
    //   },
    // },
    // p0q24p: {
    //   name: '组1',
    //   nodeType: 'ITEM_TYPE_GROUP',
    //   rect: {
    //     top: 20,
    //     left: 30,
    //     width: 340,
    //     height: 112,
    //     rotate: 0,
    //   },
    //   animate: {
    //     name: '',
    //     duration: 1,
    //     delay: 0,
    //     repeat: 1,
    //   },
    //   attrs: {
    //     color: 'red',
    //     fontSize: 12,
    //     text: '双击编辑文本',
    //     bgColor: '',
    //     lineHeight: 1.5,
    //   },
    // },
    // ftpdy1: {
    //   name: '文本 21',
    //   type: 'COMPONENT_TYPE_TEXT',
    //   nodeType: 'ITEM_TYPE_SINGLE',
    //   belong: 'p0q241',
    //   rect: {
    //     top: 0,
    //     left: 0,
    //     width: 320,
    //     height: 40,
    //     rotate: 0,
    //   },
    //   animate: {
    //     name: '',
    //     duration: 1,
    //     delay: 0,
    //     repeat: 1,
    //   },
    //   attrs: {
    //     color: 'red',
    //     fontSize: 12,
    //     text: '双击编辑文本',
    //     bgColor: '',
    //     lineHeight: 1.5,
    //   },
    // },
    // upivz1: {
    //   name: '文本 22',
    //   type: 'COMPONENT_TYPE_TEXT',
    //   nodeType: 'ITEM_TYPE_SINGLE',
    //   belong: 'p0q241',
    //   rect: {
    //     top: 72,
    //     left: 20,
    //     width: 320,
    //     height: 40,
    //     rotate: 0,
    //   },
    //   animate: {
    //     name: '',
    //     duration: 1,
    //     delay: 0,
    //     repeat: 1,
    //   },
    //   attrs: {
    //     color: 'red',
    //     fontSize: 12,
    //     text: '双击编辑文本',
    //     bgColor: '',
    //     lineHeight: 1.5,
    //   },
    // },
    // p0q241: {
    //   name: '组2',
    //   nodeType: 'ITEM_TYPE_GROUP',
    //   rect: {
    //     top: 120,
    //     left: 70,
    //     width: 340,
    //     height: 112,
    //     rotate: 0,
    //   },
    //   animate: {
    //     name: '',
    //     duration: 1,
    //     delay: 0,
    //     repeat: 1,
    //   },
    //   attrs: {
    //     color: 'red',
    //     fontSize: 12,
    //     text: '双击编辑文本',
    //     bgColor: '',
    //     lineHeight: 1.5,
    //   },
    // },
  },
  // 当前正在操作的编辑框key
  activeEditKey: [],
  // 组合列表
  groupList: {// p0q24p: [
    //   'ftpdy8',
    //   'upivzn',
    // ],
  },
  // 页面列表
  pages: [[// 'p0q24p',
  ]],
  // 当前激活的页面
  activePage: 0,
  // 当前正在活动的元素尺寸和位置
  moveBoundRect: {},
  // 背景图片
  backGroundImage: '',
  // 背景音效地址
  backMusicUrl: '',
  // 移动标识
  moveInfo: null
});
var store = (0, _redux.createStore)(reducer, defaultStore,
/* eslint-disable-next-line no-underscore-dangle */
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var _default = store; // 设置监听器
// 上次全局状态树

exports["default"] = _default;
var lastStore = defaultStore;
var subscribeList = {};
store.subscribe(function () {
  var state = store.getState();
  var obj = state.toJS();
  Object.keys(subscribeList).forEach(function (it) {
    if (obj[it] !== lastStore.toJS()[it]) {
      subscribeList[it].forEach(function (item) {
        return item(obj[it]);
      });
    }
  });
  lastStore = state;
});
/**
 * 监听状态树某个key变换
 * @param {String} key 要监听的key
 * @param {Function} callback 回调
 */

function subscribe(key, callback) {
  if (subscribeList[key]) {
    subscribeList[key].push(callback);
  } else {
    subscribeList[key] = [callback];
  }
}
/**
 * 全局派发事件
 * @param {Object} action 派发的事件
 */


function dispatch(action) {
  store.dispatch(action);
}