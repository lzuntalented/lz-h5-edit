import { createStore } from 'redux';
import { fromJS } from 'immutable';
import HistoryStore from '../utils/HistoryStore';

import reduces from './reduce';
import {
  ACTION_COPY_ITEM, ACTION_COPY_PAGE, ACTION_DELETE_PAGE, ACTION_ADD_PAGE_ITEM_WITH_ATTRS,
  CHANGE_ACTIVE_EDIT_KEY, CHANGE_ACTIVE_PAGE, ADD_PAGE_ITEM, STORE_ADD_PAGE, STORE_INIT_TO_EDIT,
  MOVE_END,
  CHANGE_ITEM_BASE_STYLE,
  CHANGE_ANIMATION,
  REMOVE_ITEM,
  PAGE_ITEM_RESORT,
  STORE_GROUP_ACTIVE_EDIT_KEYS,
  STORE_GROUP_SPLIT,
  CHANGE_ITEM_ATTR,
} from '../core/constants';

// 可以回退的操作列表
const recordHistoryAction = [
  ACTION_COPY_ITEM, ACTION_COPY_PAGE, ACTION_DELETE_PAGE, ACTION_ADD_PAGE_ITEM_WITH_ATTRS,
  CHANGE_ACTIVE_EDIT_KEY, CHANGE_ACTIVE_PAGE, ADD_PAGE_ITEM, STORE_ADD_PAGE, STORE_INIT_TO_EDIT,
  MOVE_END, CHANGE_ITEM_BASE_STYLE, CHANGE_ANIMATION, REMOVE_ITEM, PAGE_ITEM_RESORT,
  STORE_GROUP_ACTIVE_EDIT_KEYS, STORE_GROUP_SPLIT, CHANGE_ITEM_ATTR,
];

// 合并多个reducer
const reducer = (store, action) => {
  for (let i = 0, len = reduces.length; i < len; i += 1) {
    const func = reduces[i];
    const ret = func.call(null, store, action);
    if (ret) {
      if (recordHistoryAction.indexOf(action.type) > -1) {
        HistoryStore.push(ret.toJS());
      }
      return ret;
    }
  }
  return store;
};

// 默认全局状态树
const defaultStore = fromJS({
  // 编辑组件列表
  editList: {
    // ftpdy8: {
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
  groupList: {
    // p0q24p: [
    //   'ftpdy8',
    //   'upivzn',
    // ],
  },
  // 页面列表
  pages: [
    [
      // 'p0q24p',
    ],
  ],
  // 当前激活的页面
  activePage: 0,
  // 当前正在活动的元素尺寸和位置
  moveBoundRect: {},
  // 背景图片
  backGroundImage: '',
  // 背景音效地址
  backMusicUrl: '',
  // 移动标识
  moveInfo: null,
});

const store = createStore(reducer, defaultStore,
  /* eslint-disable-next-line no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;

// 设置监听器
// 上次全局状态树
let lastStore = defaultStore;
const subscribeList = {};
store.subscribe(() => {
  const state = store.getState();
  const obj = state.toJS();
  Object.keys(subscribeList).forEach((it) => {
    if (obj[it] !== lastStore.toJS()[it]) {
      subscribeList[it].forEach(item => item(obj[it]));
    }
  });
  lastStore = state;
});

/**
 * 监听状态树某个key变换
 * @param {String} key 要监听的key
 * @param {Function} callback 回调
 */
export function subscribe(key, callback) {
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
export function dispatch(action) {
  store.dispatch(action);
}
