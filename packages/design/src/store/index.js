import { createStore } from 'redux';
import { fromJS } from 'immutable';
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
} from '@lzshow/constants';
import HistoryStore from '../utils/HistoryStore';

import reduces from './reduce';

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
  pages: [
    [],
  ],
  editList: {
    '4li7sh': {
      attrs: {
        text: '按钮',
        type: 'primary',
      },
      rect: {
        top: 0,
        left: 0,
        width: 320,
        height: 40,
        rotate: 0,
      },
      name: '按钮 1',
      border: {
        style: 'solid',
        color: '#000000',
        width: 0,
        radius: 0,
      },
      animates: [],
      previewAnimates: [],
      type: 'COMPONENT_TYPE_BUTTON',
      nodeType: 'ITEM_TYPE_SINGLE',
      belong: 'uju0v0',
    },
    avq806: {
      attrs: {
        text: '按钮',
        type: 'primary',
      },
      rect: {
        top: 218,
        left: 284,
        width: 320,
        height: 40,
        rotate: 0,
      },
      name: '按钮 2',
      border: {
        style: 'solid',
        color: '#000000',
        width: 0,
        radius: 0,
      },
      animates: [],
      previewAnimates: [],
      type: 'COMPONENT_TYPE_BUTTON',
      nodeType: 'ITEM_TYPE_SINGLE',
      belong: 'uju0v0',
    },
    o8xal3: {
      attrs: {
        text: '按钮',
        type: 'primary',
      },
      rect: {
        top: 111,
        left: 0,
        width: 320,
        height: 40,
        rotate: 0,
      },
      name: '按钮 3',
      border: {
        style: 'solid',
        color: '#000000',
        width: 0,
        radius: 0,
      },
      animates: [],
      previewAnimates: [],
      type: 'COMPONENT_TYPE_BUTTON',
      nodeType: 'ITEM_TYPE_SINGLE',
      belong: 'nis2fq',
    },
    nis2fq: {
      name: '组1',
      nodeType: 'ITEM_TYPE_GROUP',
      rect: {
        top: 33,
        left: -228,
        width: 667,
        height: 258,
        rotate: 0,
      },
      animates: [],
      previewAnimates: [],
      border: {
        style: 'solid',
        color: '#000000',
        width: 0,
        radius: 0,
      },
      attrs: {},
    },
    uju0v0: {
      name: '组2',
      nodeType: 'ITEM_TYPE_GROUP',
      rect: {
        top: 0,
        left: 63,
        width: 604,
        height: 258,
        rotate: 0,
      },
      animates: [],
      previewAnimates: [],
      border: {
        style: 'solid',
        color: '#000000',
        width: 0,
        radius: 0,
      },
      attrs: {},
      belong: 'nis2fq',
    },
  },
  moveTag: false,
  backGroundImage: '',
  activeEditKey: [],
  backMusicUrl: '',
  moveBoundRect: {},
  activePage: 0,
  groupList: {
    nis2fq: [
      'uju0v0',
      'o8xal3',
    ],
    uju0v0: [
      '4li7sh',
      'avq806',
    ],
  },
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
