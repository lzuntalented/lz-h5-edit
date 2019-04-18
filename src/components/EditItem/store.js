import React from 'react';

let store = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  lastTop: 0,
  lastLeft: 0,
  lastWidth: 0,
  lastHeight: 0,
};
// 历史记录
const history = [store];
const LayoutContext = React.createContext(store);
export default LayoutContext;

export function setStore(obj) {
  const data = Object.assign({}, store, obj);
  history.push(data);
  store = data;
}

export function getStore() {
  return store;
}
