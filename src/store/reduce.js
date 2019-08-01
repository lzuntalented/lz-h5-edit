import { fromJS } from 'immutable';
import {
  POINT_LEFT_CENTER, MOVE_START, MOVE_END, MOVE_CHANGE,
  CREATE_ITEM_STORE, POINT_RIGHT_CENTER, POINT_TOP_CENTER, POINT_BOTTOM_CENTER,
  ALL_ITEM, RESET_CONTENT_HEIGHT, CHANGE_ACTIVE_EDIT_KEY, ADD_ITEM_ATTRS, CHANGE_ITEM_ATTR,
  CHANGE_ITEM_BASE_STYLE, STORE_ADD_PAGE, CHANGE_ACTIVE_PAGE, ADD_PAGE_ITEM, POINT_LEFT_TOP,
  POINT_RIGHT_BOTTOM, POINT_LEFT_BOTTOM, POINT_RIGHT_TOP, REMOVE_ITEM,
  POINT_ROTATE, SAVE_MOVE_START_RECT, PAGE_ITEM_RESORT,
  CHANGE_ALL_PAGE_BACKGROUND, STORE_RESET_TO_EDIT, STORE_CHANGE_BACK_MUSIC_URL, ADD_ACTIVE_EDIT_KEY, STORE_GROUP_ACTIVE_EDIT_KEYS,
} from '../core/constants';
import { createEditItem } from '../utils';
import { createId } from '../utils/IDManage';
import { getNameWithItemType } from '../utils/Tools';

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
    obj.moveTag = false;
    return fromJS(obj);
  }
  return null;
}

function resetRect(itemObj, flag, originRect, distance, value, obj) {
  const { rect } = itemObj;
  if (flag === POINT_LEFT_CENTER || flag === POINT_RIGHT_CENTER) {
    rect.width = originRect.width + distance;
    if (flag === POINT_LEFT_CENTER) {
      rect.left = originRect.left - distance;
    }
  } else if (flag === POINT_TOP_CENTER || flag === POINT_BOTTOM_CENTER) {
    rect.height = originRect.height + distance;
    if (flag === POINT_TOP_CENTER) {
      rect.top = originRect.top - distance;
    }
  } else if (flag === POINT_LEFT_TOP || flag === POINT_RIGHT_BOTTOM
     || flag === POINT_LEFT_BOTTOM || flag === POINT_RIGHT_TOP) {
    rect.height = originRect.height + distance * 2;
    rect.width = originRect.width + distance * 2;
    rect.top = originRect.top - distance;
    rect.left = originRect.left - distance;
  } else if (flag === ALL_ITEM) {
    // 移动整个编辑框
    const { x, y } = value;
    rect.top = originRect.top + y;
    rect.left = originRect.left + x;
  } else if (flag === POINT_ROTATE) {
    // const { moveBoundRect } = obj;
    const moveBoundRect = obj.moveTag.boundRect;
    const { coordStart, coordEnd } = value;
    const {
      x, y, width, height,
    } = moveBoundRect;

    const ox = x + width / 2;
    const oy = y + height / 2;

    const ax = ox;
    const ay = y;

    const oa = {
      x: ax - ox,
      y: ay - oy,
    };

    const ob = {
      x: coordEnd.x - ox,
      y: coordEnd.y - oy,
    };

    const ab = {
      x: coordEnd.x - ax,
      y: coordEnd.y - ay,
    };

    const a = Math.sqrt(Math.pow(oa.x, 2) + Math.pow(oa.y, 2));

    const b = Math.sqrt(Math.pow(ob.x, 2) + Math.pow(ob.y, 2));
    const c = Math.sqrt(Math.pow(ab.x, 2) + Math.pow(ab.y, 2));


    let dis = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b);
    dis = Math.acos(dis) * (180 / Math.PI);
    if (coordEnd.x > ox) {
      // 小于180°夹角
    } else {
      dis = -dis;
    }
    rect.rotate = Math.floor(dis);
  }
}

function change(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === MOVE_CHANGE) {
    const {
      editList, moveTag, activeEditKey, groupList,
    } = obj;
    const { distance } = value;
    // const { rect } = editList[activeEditKey];
    const { key: flag, rect: originRect, rectMap } = moveTag;

    const list = [];
    if (groupList[activeEditKey]) {
      groupList[activeEditKey].forEach((it) => {
        resetRect(editList[it], flag, rectMap[it], distance, value, obj);
      });
    } else {
      list.push(editList[activeEditKey]);
      list.forEach(it => resetRect(it, flag, originRect, distance, value, obj));
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
    const { rect } = editList[key];
    if (rect.height < height) {
      rect.height = height;
    }
    return fromJS(obj);
  }
  return null;
}

function changeActiveEditKey(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === CHANGE_ACTIVE_EDIT_KEY) {
    obj.activeEditKey = [value];
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
    editList[key].attrs = attrs;
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
    Object.assign(editList[key].attrs, attrs);
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
    const page = pages[activePage];
    // 给组件命名
    const name = `${getNameWithItemType(value)} ${page.length + 1}`;
    editList[uniqueId] = createEditItem(value, name);
    page.push(uniqueId);
    // 设置当前添加的元素为激活项
    obj.activeEditKey = [uniqueId];
    return fromJS(obj);
  }
  return null;
}

// 移除元素
function removeItem(store, action) {
  const { type } = action;
  const obj = store.toJS();
  if (type === REMOVE_ITEM) {
    const { activeEditKey, activePage, pages } = obj;
    // { 唯一标识, 组件类型 }
    const page = pages[activePage];
    let delIndex = -1;
    page.forEach((it, index) => {
      if (it === activeEditKey) delIndex = index;
    });
    page.splice(delIndex, 1);
    return fromJS(obj);
  }
  return null;
}

function saveMoveTagBoundingClientRect(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === SAVE_MOVE_START_RECT) {
    obj.moveBoundRect = value;
    return fromJS(obj);
  }
  return null;
}

function resortPageItem(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === PAGE_ITEM_RESORT) {
    const { activePage, pages } = obj;
    pages[activePage] = value;
    return fromJS(obj);
  }
  return null;
}

function changeBackGround(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === CHANGE_ALL_PAGE_BACKGROUND) {
    obj.backGroundImage = value;
    return fromJS(obj);
  }
  return null;
}

function resetStore(store, action) {
  const { type: actionType, value } = action;
  // const obj = store.toJS();
  if (actionType === STORE_RESET_TO_EDIT) {
    const { list, backGroundImage } = value;
    const pages = [];
    const editList = {};
    list.forEach((it) => {
      const page = [];
      it.forEach((item, i) => {
        const {
          type,
        } = item;
        const uniqueId = createId();
        page.push(uniqueId);
        editList[uniqueId] = {
          name: `${getNameWithItemType(type)}${i}`,
          current: JSON.parse(JSON.stringify(item)),
          before: JSON.parse(JSON.stringify(item)),
        };
      });
      pages.push(page);
    });
    const ob = {
      moveTag: false,
      editList,
      activeEditKey: null,
      pages,
      activePage: 0,
      moveBoundRect: {},
      backGroundImage,
    };
    return fromJS(ob);
  }
  return null;
}

function changeBackMusicUrl(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === STORE_CHANGE_BACK_MUSIC_URL) {
    obj.backMusicUrl = value;
    return fromJS(obj);
  }
  return null;
}

function addActiveEditKey(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === ADD_ACTIVE_EDIT_KEY) {
    if (obj.activeEditKey.indexOf(value) === -1) {
      obj.activeEditKey.push(value);
    }
    return fromJS(obj);
  }
  return null;
}

function groupActiveEditKeys(store, action) {
  const { type } = action;
  const obj = store.toJS();
  if (type === STORE_GROUP_ACTIVE_EDIT_KEYS) {
    const { activeEditKey } = obj;
    if (activeEditKey && activeEditKey.length > 1) {
      const uniqueId = createId();
      obj.groupList[uniqueId] = activeEditKey;
      obj.activeEditKey = [uniqueId];
    }
    return fromJS(obj);
  }
  return null;
}
groupActiveEditKeys;

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
  removeItem,
  saveMoveTagBoundingClientRect,
  resortPageItem,
  changeBackGround,
  resetStore,
  changeBackMusicUrl,
  addActiveEditKey,
  groupActiveEditKeys,
];
