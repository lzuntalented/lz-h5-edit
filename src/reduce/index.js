import { fromJS } from 'immutable';
import {
  POINT_LEFT_CENTER, MOVE_START, MOVE_END, MOVE_CHANGE,
  CREATE_ITEM_STORE, POINT_RIGHT_CENTER, POINT_TOP_CENTER, POINT_BOTTOM_CENTER,
  ALL_ITEM, RESET_CONTENT_HEIGHT, CHANGE_ACTIVE_EDIT_KEY, ADD_ITEM_ATTRS, CHANGE_ITEM_ATTR, CHANGE_ITEM_BASE_STYLE, STORE_ADD_PAGE, CHANGE_ACTIVE_PAGE, ADD_PAGE_ITEM,
} from '../components/EditItem/constants';
import { createEditItem } from '../store';
import { createId } from '../utils/IDManage';

function startMove(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === MOVE_START) {
    return fromJS(Object.assign(obj, {
      moveTag: value,
    }));
  }
  return null;
}

function endMove(store, action) {
  const { type } = action;
  const obj = store.toJS();
  if (type === MOVE_END) {
    const { editList, activeEditKey } = obj;
    const { current, before } = editList[activeEditKey];
    // 当前编辑属性变更为之前
    Object.assign(before, current);
    return fromJS(Object.assign(obj, {
      moveTag: false,
    }));
  }
  return null;
}

function change(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === MOVE_CHANGE) {
    const { editList, moveTag, activeEditKey } = obj;
    const { distance } = value;
    const { current, before } = editList[activeEditKey];
    const flag = moveTag;
    if (flag === POINT_LEFT_CENTER || flag === POINT_RIGHT_CENTER) {
      current.width = before.width + distance;
      if (flag === POINT_LEFT_CENTER) {
        current.left = before.left - distance;
      }
    } else if (flag === POINT_TOP_CENTER || flag === POINT_BOTTOM_CENTER) {
      current.height = before.height + distance;
      if (flag === POINT_TOP_CENTER) {
        current.top = before.top - distance;
      }
    } else if (flag === ALL_ITEM) {
      const { x, y } = value;
      current.top = before.top + y;
      current.left = before.left + x;
    }
    return fromJS(obj);
  }
  return null;
}

function create(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === CREATE_ITEM_STORE) {
    const { editList, activePage, pages } = obj;
    // { 唯一标识, 组件类型 }
    const { uniqueId, type: componentType } = value;
    editList[uniqueId] = createEditItem(componentType);
    // pages[activePage].push(uniqueId);
    return fromJS(obj);
  }
  return null;
}

function resetContentHeight(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === RESET_CONTENT_HEIGHT) {
    const { editList } = obj;
    const { height, key } = value;
    const { current, before } = editList[key];
    if (current.height < height) {
      current.height = height;
      before.height = height;
    }
    return fromJS(obj);
  }
  return null;
}

function changeActiveEditKey(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === CHANGE_ACTIVE_EDIT_KEY) {
    obj.activeEditKey = value;
    return fromJS(obj);
  }
  return null;
}

function addAttrs(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === ADD_ITEM_ATTRS) {
    const { attrs, key } = value;
    const { editList } = obj;
    const { before, current } = editList[key];
    before.attrs = attrs;
    current.attrs = attrs;
    return fromJS(obj);
  }
  return null;
}

function changeAttrs(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === CHANGE_ITEM_ATTR) {
    const { attrs, key } = value;
    const { editList } = obj;
    const { before, current } = editList[key];
    Object.assign(before.attrs, attrs);
    Object.assign(current.attrs, attrs);
    return fromJS(obj);
  }
  return null;
}

function changeBaseStyle(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === CHANGE_ITEM_BASE_STYLE) {
    const { style, key } = value;
    const { editList } = obj;
    const { before, current } = editList[key];
    Object.assign(before, style);
    Object.assign(current, style);
    return fromJS(obj);
  }
  return null;
}

function createPage(store, action) {
  const { type } = action;
  const obj = store.toJS();
  if (type === STORE_ADD_PAGE) {
    const { pages } = obj;
    pages.push([]);
    obj.activePage = pages.length - 1;
    return fromJS(obj);
  }
  return null;
}

function changeActivePage(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === CHANGE_ACTIVE_PAGE) {
    obj.activePage = value;
    return fromJS(obj);
  }
  return null;
}

function addPageItem(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === ADD_PAGE_ITEM) {
    const { editList, activePage, pages } = obj;
    // { 唯一标识, 组件类型 }
    const uniqueId = createId();
    editList[uniqueId] = createEditItem(value);
    pages[activePage].push(uniqueId);
    return fromJS(obj);
  }
  return null;
}

export default [
  startMove,
  endMove,
  change,
  create,
  resetContentHeight,
  changeActiveEditKey,
  addAttrs,
  changeAttrs,
  changeBaseStyle,
  createPage,
  changeActivePage,
  addPageItem,
];
