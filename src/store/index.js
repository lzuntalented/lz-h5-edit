import { createStore } from 'redux';
import { fromJS } from 'immutable';

import reduces from '../reduce';

/**
 * 创建每个编辑组件所需默认参数
 */
export function createEditItem(type, name) {
  const defaultBaseStyle = {
    // 组件类型
    type,
    top: 0,
    left: 0,
    width: 320,
    height: 0,
    // 旋转角度 deg
    rotate: 0,
    // 动画名称
    animateName: '',
    // 动画执行时间 单位(s)
    animateDuration: 1,
    // 动画延时执行 单位(s)
    animateDelay: 0,
    // 动画重复次数
    animateRepeat: 1,
  };
  return {
    // 组件名称
    name,
    current: Object.assign({}, defaultBaseStyle),
    before: Object.assign({}, defaultBaseStyle),
  };
}

// 合并多个reducer
const reducer = (store, action) => {
  for (let i = 0, len = reduces.length; i < len; i += 1) {
    const func = reduces[i];
    const ret = func.call(null, store, action);
    if (ret) return ret;
  }
  return store;
};

// 默认全局状态树
const defaultStore = fromJS({
  // 移动标识 { key, flag }
  moveTag: false,
  // 编辑组件列表
  editList: {},
  // 当前正在操作的编辑框key
  activeEditKey: null,
  // 页面列表
  pages: [[]],
  // 当前激活的页面
  activePage: 0,
  // 当前正在活动的元素尺寸和位置
  moveBoundRect: {},
});

const store = createStore(reducer, defaultStore,
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
