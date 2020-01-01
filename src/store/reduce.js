import { fromJS } from 'immutable';
import {
  POINT_LEFT_CENTER, MOVE_START, MOVE_END, MOVE_CHANGE,
  CREATE_ITEM_STORE, POINT_RIGHT_CENTER, POINT_TOP_CENTER, POINT_BOTTOM_CENTER,
  ALL_ITEM, RESET_CONTENT_HEIGHT, CHANGE_ACTIVE_EDIT_KEY, ADD_ITEM_ATTRS, CHANGE_ITEM_ATTR,
  CHANGE_ITEM_BASE_STYLE, STORE_ADD_PAGE, CHANGE_ACTIVE_PAGE, ADD_PAGE_ITEM, POINT_LEFT_TOP,
  POINT_RIGHT_BOTTOM, POINT_LEFT_BOTTOM, POINT_RIGHT_TOP, REMOVE_ITEM,
  POINT_ROTATE, SAVE_MOVE_START_RECT, PAGE_ITEM_RESORT,
  CHANGE_ALL_PAGE_BACKGROUND, STORE_RESET_TO_EDIT, STORE_CHANGE_BACK_MUSIC_URL, ADD_ACTIVE_EDIT_KEY,
  STORE_GROUP_ACTIVE_EDIT_KEYS, ITEM_TYPE_GROUP, CHANGE_ANIMATION, STORE_GROUP_SPLIT,
  STORE_INIT_TO_EDIT, ACTION_COPY_PAGE, ACTION_COPY_ITEM, ITEM_TYPE_SINGLE,
  ACTION_DELETE_PAGE, ACTION_ADD_PAGE_ITEM_WITH_ATTRS,
  ACTION_INIT_HISTORY_STORE, ACTION_ADD_PAGE_ITEM_WITH_SIZE, ACTION_CHANGE_ITEM_BORDER, ACTION_CHANGE_ITEM_NAME, ACTION_RESORT_GROUP_ITEM, ACTION_PAGE_MOVE_DOWN, ACTION_PAGE_MOVE_UP,
} from '../core/constants';
import {
  createEditItem, createNode, getAroundRect, createGroup, performGroupRect, deepCopy,
} from '../utils';
import { createId } from '../utils/IDManage';
import { getComponentDefaultAttrs, getComponentDefaultSize, getComponentDefaultName } from '../core/components';

function startMove(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === MOVE_START) {
    const { activeEditKey, groupList, editList } = obj;
    // if (activeEditKey)
    const rectMap = {};
    activeEditKey.forEach((it) => {
      const { belong } = editList[it];
      if (belong) {
        rectMap[belong] = Object.assign({}, editList[belong].rect);
        groupList[belong].forEach((item) => {
          const { rect } = editList[item];
          rectMap[item] = Object.assign({}, rect);
        });
      }
    });
    if (value.rectMap) {
      Object.assign(rectMap, value.rectMap);
    } else {
      value.rectMap = rectMap;
    }

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

function performRect(flag, startRect, value, moveBoundRect) {
  const result = {};
  const { distance } = value;
  if (flag === POINT_LEFT_CENTER || flag === POINT_RIGHT_CENTER) {
    result.width = startRect.width + distance;
    if (flag === POINT_LEFT_CENTER) {
      result.left = startRect.left - distance;
    }
  } else if (flag === POINT_TOP_CENTER || flag === POINT_BOTTOM_CENTER) {
    result.height = startRect.height + distance;
    if (flag === POINT_TOP_CENTER) {
      result.top = startRect.top - distance;
    }
  } else if (flag === POINT_LEFT_TOP || flag === POINT_RIGHT_BOTTOM
     || flag === POINT_LEFT_BOTTOM || flag === POINT_RIGHT_TOP) {
    result.height = startRect.height + distance * 2;
    result.width = startRect.width + distance * 2;
    result.top = startRect.top - distance;
    result.left = startRect.left - distance;
  } else if (flag === ALL_ITEM) {
    // 移动整个编辑框
    const { x, y } = value;
    result.top = startRect.top + y;
    result.left = startRect.left + x;
  } else if (flag === POINT_ROTATE) {
    // const { moveBoundRect } = obj;
    // const moveBoundRect = obj.moveTag.boundRect;
    const { coordStart, coordEnd } = value;
    const {
      x, y, width, bottom: height,
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
    // console.log(moveBoundRect, 'change', oa, ob, ab, a, b, c, ab, dis);
    dis = Math.acos(dis) * (180 / Math.PI);
    if (coordEnd.x > ox) {
      // 小于180°夹角
    } else {
      dis = -dis;
    }
    result.rotate = Math.floor(dis);
  }
  return result;
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
      x, y, width, bottom: height,
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
    // console.log(moveBoundRect, 'change', oa, ob, ab, a, b, c, ab, dis);
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
    const {
      boundRect, key: flag, rectMap,
    } = moveTag;

    const groupKeys = {};
    const moveItemGroupKeys = {};
    activeEditKey.forEach((it) => {
      // console.log(it, rectMap[it], rectMap);
      const item = editList[it];
      const { belong, nodeType } = item;
      if (flag === POINT_ROTATE) {
        const rect = performRect(flag, rectMap[it], value, boundRect);
        Object.assign(item.rect, rect);
        return;
      }
      if (nodeType === ITEM_TYPE_GROUP) {
        groupKeys[it] = true;
      } else if (belong) {
        moveItemGroupKeys[belong] = [it];
      } else {
        const rect = performRect(flag, rectMap[it], value, boundRect);
        Object.assign(item.rect, rect);
      }
    });

    Object.keys(groupKeys).forEach((key) => {
      const itemList = groupList[key];
      const rectList = itemList.map(it => Object.assign({}, rectMap[it], performRect(flag, rectMap[it], value, boundRect)));
      Object.assign(editList[key].rect, performGroupRect(rectList));
      const currentGroupRect = editList[key].rect;
      itemList.forEach((it, index) => {
        const r = rectList[index];
        Object.assign(editList[it].rect, r,
          { top: r.top - currentGroupRect.top, left: r.left - currentGroupRect.left });
      });
    });

    Object.keys(moveItemGroupKeys).forEach((key) => {
      const itemList = groupList[key];
      const moveItem = moveItemGroupKeys[key];
      const rectList = itemList.map((it) => {
        if (moveItem.indexOf(it) === -1) {
          return rectMap[it];
        }
        return Object.assign({}, rectMap[it], performRect(flag, rectMap[it], value, boundRect));
      });
      Object.assign(editList[key].rect, performGroupRect(rectList));
      const currentGroupRect = editList[key].rect;
      itemList.forEach((it, index) => {
        const r = rectList[index];
        Object.assign(editList[it].rect, r,
          { top: r.top - currentGroupRect.top, left: r.left - currentGroupRect.left });
      });
    });

    // activeEditKey.forEach((it) => {
    //   const item = editList[it];
    //   resetRect(item, flag, originRect, distance, value, obj);
    //   // console.log(item, flag, originRect, distance, value, 'change', item.rect);
    //   const { belong } = item;
    //   if (belong) {
    //     const groupItem = editList[belong];
    //     const groupItemRect = groupItem.rect;

    //     // 计算组内 左上最小坐标
    //     let minLeft = item.rect.left;
    //     let minTop = item.rect.top;
    //     groupList[belong].forEach((that) => {
    //       // 当前元素使用移动后坐标
    //       if (that === it) return;
    //       const thatItemRect = rectMap[that];
    //       minLeft = Math.min(minLeft, thatItemRect.left);
    //       minTop = Math.min(minTop, thatItemRect.top);
    //     });
    //     // 重置组内元素坐标
    //     groupList[belong].forEach((that) => {
    //       const thatItemRect = editList[that].rect;
    //       // 当前元素
    //       if (that === it) {
    //         thatItemRect.left -= minLeft;
    //         thatItemRect.top -= minTop;
    //       } else {
    //         // 其余元素，使用点击时坐标计算
    //         thatItemRect.left = rectMap[that].left - minLeft;
    //         thatItemRect.top = rectMap[that].top - minTop;
    //       }
    //     });
    //     // console.log(minLeft, minTop, 'minLeft, minTop, ');
    //     groupItemRect.left = rectMap[belong].left + minLeft;
    //     groupItemRect.top = rectMap[belong].top + minTop;
    //     const groupRect = getAroundRect(groupList[belong], editList);
    //     groupItemRect.width = groupRect.width;
    //     groupItemRect.height = groupRect.height;
    //   }
    // });
    return fromJS(obj);
  }
  return null;
}

function create(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === CREATE_ITEM_STORE) {
    const { editList } = obj;
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
    Object.assign(editList[key].rect, style);
    return fromJS(obj);
  }
  return null;
}

function changeAnimation(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === CHANGE_ANIMATION) {
    const { style, key } = value;
    const { editList } = obj;
    Object.assign(editList[key].animate, style);
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
    obj.activeEditKey = [];
    return fromJS(obj);
  }
  return null;
}

function changeActivePage(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === CHANGE_ACTIVE_PAGE) {
    obj.activePage = value;
    obj.activeEditKey = [];
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
    const name = `${getComponentDefaultName(value)} ${page.length + 1}`;
    editList[uniqueId] = createNode(value, name);
    Object.assign(editList[uniqueId].attrs, getComponentDefaultAttrs(value));
    Object.assign(editList[uniqueId].rect, getComponentDefaultSize(value));
    page.push(uniqueId);
    // 设置当前添加的元素为激活项
    obj.activeEditKey = [uniqueId];
    return fromJS(obj);
  }
  return null;
}


function addPageItemWithAttrs(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === ACTION_ADD_PAGE_ITEM_WITH_ATTRS) {
    const { editList, activePage, pages } = obj;
    // { 唯一标识, 组件类型 }
    const uniqueId = createId();
    const page = pages[activePage];
    // 给组件命名
    const name = `${getComponentDefaultName(value.type)} ${page.length + 1}`;
    editList[uniqueId] = createNode(value.type, name);
    Object.assign(editList[uniqueId].attrs, getComponentDefaultAttrs(value.type), value.attrs);
    Object.assign(editList[uniqueId].rect, getComponentDefaultSize(value.type));
    page.push(uniqueId);
    // 设置当前添加的元素为激活项
    obj.activeEditKey = [uniqueId];
    return fromJS(obj);
  }
  return null;
}

function addPageItemWithSize(store, action) {
  const { type, value } = action;
  const obj = store.toJS();
  if (type === ACTION_ADD_PAGE_ITEM_WITH_SIZE) {
    const { editList, activePage, pages } = obj;
    // { 唯一标识, 组件类型 }
    const uniqueId = createId();
    const page = pages[activePage];
    // 给组件命名
    const name = `${getComponentDefaultName(value.type)} ${page.length + 1}`;
    editList[uniqueId] = createNode(value.type, name);
    Object.assign(editList[uniqueId].rect, value.size);
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
    // 当前只支持单个移除
    if (activeEditKey.length === 1) {
      page.forEach((it, index) => {
        if (activeEditKey.indexOf(it) > -1) delIndex = index;
      });
      page.splice(delIndex, 1);
      obj.activeEditKey = [];
    }
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
          name: `${getComponentDefaultName(type)}${i}`,
          ...JSON.parse(JSON.stringify(item)),
        };
      });
      pages.push(page);
    });
    const ob = {
      moveTag: false,
      editList,
      groupList: {},
      activeEditKey: [],
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
    const {
      activeEditKey, groupList, editList, pages, activePage,
    } = obj;
    if (activeEditKey && activeEditKey.length > 1) {
      const uniqueId = createId();
      groupList[uniqueId] = [].concat(activeEditKey);
      editList[uniqueId] = createGroup(`组${Object.keys(groupList).length}`);
      const groupItem = editList[uniqueId];
      const itemRectList = activeEditKey.map(it => editList[it].rect);
      Object.assign(groupItem.rect, performGroupRect(itemRectList));
      activeEditKey.forEach((it) => {
        const item = editList[it];
        item.belong = uniqueId;
        Object.assign(item.rect, {
          left: item.rect.left - groupItem.rect.left,
          top: item.rect.top - groupItem.rect.top,
        });

        const page = pages[activePage];
        const index = page.indexOf(it);
        page.splice(index, 1);
      });
      obj.activeEditKey = [uniqueId];
      pages[activePage].push(uniqueId);
    }
    return fromJS(obj);
  }
  return null;
}

function splitGroupActiveEditKeys(store, action) {
  const { type } = action;
  const obj = store.toJS();
  if (type === STORE_GROUP_SPLIT) {
    const {
      activeEditKey, groupList, editList, pages, activePage,
    } = obj;
    if (activeEditKey && activeEditKey.length === 1) {
      const editKey = activeEditKey[0];
      const item = editList[editKey];
      const groupKey = item.belong || (item.nodeType === ITEM_TYPE_GROUP && editKey);
      if (groupKey) {
        // 该元素移除可见元素
        const page = pages[activePage];
        const index = page.indexOf(groupKey);
        page.splice(index, 1);

        const groupItemsList = groupList[groupKey];

        const groupItem = editList[groupKey];
        groupItemsList.forEach((k) => {
          const it = editList[k];
          delete it.belong;
          Object.assign(it.rect, {
            left: it.rect.left + groupItem.rect.left,
            top: it.rect.top + groupItem.rect.top,
          });
          page.push(k);
        });
        obj.activeEditKey = [];
      }
    }
    return fromJS(obj);
  }
  return null;
}

function initStore(store, action) {
  const { type, value } = action;
  if (type === STORE_INIT_TO_EDIT) {
    return fromJS(value);
  }
  return null;
}

function initHistoryStore(store, action) {
  const { type, value } = action;
  if (type === ACTION_INIT_HISTORY_STORE) {
    return fromJS(value);
  }
  return null;
}

function copyPage(store, action) {
  const { type } = action;
  if (type === ACTION_COPY_PAGE) {
    const obj = store.toJS();
    const {
      groupList, editList, pages, activePage,
    } = obj;
    const page = pages[activePage];
    const result = [];
    const cloneGroupList = {};

    page.forEach((key) => {
      const item = editList[key];
      const itemObj = deepCopy(item);
      const uniqueId = createId();
      editList[uniqueId] = itemObj;
      result.push(uniqueId);
      const { nodeType } = item;
      if (nodeType === ITEM_TYPE_GROUP) {
        cloneGroupList[key] = uniqueId;
      }
    });

    Object.keys(cloneGroupList).forEach((key) => {
      groupList[key].forEach((k) => {
        const item = editList[k];
        const itemObj = deepCopy(item);
        const uniqueId = createId();
        editList[uniqueId] = itemObj;
        itemObj.belong = cloneGroupList[key];
      });
    });

    obj.activePage = pages.length;
    obj.activeEditKey = [];
    pages.push(result);
    return fromJS(obj);
  }
  return null;
}

function copyItem(store, action) {
  const { type, value } = action;
  if (type === ACTION_COPY_ITEM) {
    const obj = store.toJS();
    const {
      groupList, editList, pages, activePage,
    } = obj;
    const item = editList[value];
    const {
      rect, animate, attrs, nodeType, name, belong,
    } = item;
    const uniqueId = createId();
    const page = pages[activePage];
    editList[uniqueId] = createNode(item.type, `${name} 拷贝`, belong);
    // 拷贝属性
    editList[uniqueId].rect = Object.assign({}, rect);
    editList[uniqueId].animate = Object.assign({}, animate);
    editList[uniqueId].attrs = Object.assign({}, attrs);

    if (nodeType === ITEM_TYPE_SINGLE) {
      if (belong) {
        // 组内元素，不需要挂载到页面上，只要挂在组节点下
        groupList[belong].push(uniqueId);
      } else {
        page.push(uniqueId);
      }
    } else {
      // 拷贝组元素，需要拷贝各个节点
    }

    // 设置当前添加的元素为激活项
    obj.activeEditKey = [uniqueId];
    return fromJS(obj);
  }
  return null;
}


function deletePage(store, action) {
  const { type } = action;
  if (type === ACTION_DELETE_PAGE) {
    const obj = store.toJS();
    const { pages, activePage } = obj;
    // 必须保留一个页面
    if (pages.length > 1) {
      pages.splice(activePage, 1);
      if (activePage === pages.length) {
        obj.activePage = activePage - 1;
      }
    }
    return fromJS(obj);
  }
  return null;
}

function changeItemBorder(store, action) {
  const { type, value } = action;
  if (type === ACTION_CHANGE_ITEM_BORDER) {
    const obj = store.toJS();
    const { border, key } = value;
    const { editList } = obj;
    // 临时方案
    if (!editList[key].border) editList[key].border = { style: 'solid' };
    Object.assign(editList[key].border, border);
    return fromJS(obj);
  }
  return null;
}

function changeItemName(store, action) {
  const { type, value } = action;
  if (type === ACTION_CHANGE_ITEM_NAME) {
    const obj = store.toJS();
    const { name, key } = value;
    const { editList } = obj;
    editList[key].name = name;
    return fromJS(obj);
  }
  return null;
}

function resortGroupItem(store, action) {
  const { type, value } = action;
  if (type === ACTION_RESORT_GROUP_ITEM) {
    const obj = store.toJS();
    const { list, key } = value;
    const { groupList } = obj;
    groupList[key] = list;
    return fromJS(obj);
  }
  return null;
}

function movePageToDown(store, action) {
  const { type } = action;
  if (type === ACTION_PAGE_MOVE_DOWN) {
    const obj = store.toJS();
    const { activePage, pages } = obj;
    if (activePage + 1 < pages.length) {
      const before = activePage;
      const after = activePage + 1;
      const tmp = pages[after];
      pages[after] = pages[before];
      pages[before] = tmp;
      obj.activePage = activePage + 1;
    }
    return fromJS(obj);
  }
  return null;
}

function movePageToUp(store, action) {
  const { type } = action;
  if (type === ACTION_PAGE_MOVE_UP) {
    const obj = store.toJS();
    const { activePage, pages } = obj;
    if (activePage - 1 > 0) {
      const before = activePage;
      const after = activePage - 1;
      const tmp = pages[after];
      pages[after] = pages[before];
      pages[before] = tmp;
      obj.activePage = activePage - 1;
    }
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
  removeItem,
  saveMoveTagBoundingClientRect,
  resortPageItem,
  changeBackGround,
  resetStore,
  changeBackMusicUrl,
  addActiveEditKey,
  groupActiveEditKeys,
  changeAnimation,
  splitGroupActiveEditKeys,
  initStore,
  copyPage,
  copyItem,
  deletePage,
  addPageItemWithAttrs,
  initHistoryStore,
  addPageItemWithSize,
  changeItemBorder,
  changeItemName,
  resortGroupItem,
  movePageToDown,
  movePageToUp,
];
