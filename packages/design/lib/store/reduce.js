"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _immutable = require("immutable");

var _core = require("@lzshow/core");

var _constants = require("@lzshow/constants");

var _utils = require("../utils");

var _IDManage = require("../utils/IDManage");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function startMove(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.MOVE_START) {
    var activeEditKey = obj.activeEditKey,
        groupList = obj.groupList,
        editList = obj.editList; // if (activeEditKey)

    var rectMap = {};
    activeEditKey.forEach(function (it) {
      var belong = editList[it].belong;

      if (belong) {
        rectMap[belong] = Object.assign({}, editList[belong].rect);
        groupList[belong].forEach(function (item) {
          var rect = editList[item].rect;
          rectMap[item] = Object.assign({}, rect);
        });
      }
    });

    if (value.rectMap) {
      Object.assign(rectMap, value.rectMap);
    } else {
      value.rectMap = rectMap;
    }

    return (0, _immutable.fromJS)(Object.assign(obj, {
      moveTag: value
    }));
  }

  return null;
}

function endMove(store, action) {
  var type = action.type;
  var obj = store.toJS();

  if (type === _constants.MOVE_END) {
    obj.moveTag = false;
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function performRect(flag, startRect, value, moveBoundRect) {
  var result = {};
  var distance = value.distance;

  if (flag === _constants.POINT_LEFT_CENTER || flag === _constants.POINT_RIGHT_CENTER) {
    result.width = startRect.width + distance;

    if (flag === _constants.POINT_LEFT_CENTER) {
      result.left = startRect.left - distance;
    }
  } else if (flag === _constants.POINT_TOP_CENTER || flag === _constants.POINT_BOTTOM_CENTER) {
    result.height = startRect.height + distance;

    if (flag === _constants.POINT_TOP_CENTER) {
      result.top = startRect.top - distance;
    }
  } else if (flag === _constants.POINT_LEFT_TOP || flag === _constants.POINT_RIGHT_BOTTOM || flag === _constants.POINT_LEFT_BOTTOM || flag === _constants.POINT_RIGHT_TOP) {
    result.height = startRect.height + distance * 2;
    result.width = startRect.width + distance * 2;
    result.top = startRect.top - distance;
    result.left = startRect.left - distance;
  } else if (flag === _constants.ALL_ITEM) {
    // 移动整个编辑框
    var x = value.x,
        y = value.y;
    result.top = startRect.top + y;
    result.left = startRect.left + x;
  } else if (flag === _constants.POINT_ROTATE) {
    // const { moveBoundRect } = obj;
    // const moveBoundRect = obj.moveTag.boundRect;
    var coordStart = value.coordStart,
        coordEnd = value.coordEnd;
    var _x = moveBoundRect.x,
        _y = moveBoundRect.y,
        width = moveBoundRect.width,
        height = moveBoundRect.bottom;
    var ox = _x + width / 2;
    var oy = _y + height / 2;
    var ax = ox;
    var ay = _y;
    var oa = {
      x: ax - ox,
      y: ay - oy
    };
    var ob = {
      x: coordEnd.x - ox,
      y: coordEnd.y - oy
    };
    var ab = {
      x: coordEnd.x - ax,
      y: coordEnd.y - ay
    };
    var a = Math.sqrt(Math.pow(oa.x, 2) + Math.pow(oa.y, 2));
    var b = Math.sqrt(Math.pow(ob.x, 2) + Math.pow(ob.y, 2));
    var c = Math.sqrt(Math.pow(ab.x, 2) + Math.pow(ab.y, 2));
    var dis = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b); // console.log(moveBoundRect, 'change', oa, ob, ab, a, b, c, ab, dis);

    dis = Math.acos(dis) * (180 / Math.PI);

    if (coordEnd.x > ox) {// 小于180°夹角
    } else {
      dis = -dis;
    }

    result.rotate = Math.floor(dis);
  }

  return result;
}

function resetRect(itemObj, flag, originRect, distance, value, obj) {
  var rect = itemObj.rect;

  if (flag === _constants.POINT_LEFT_CENTER || flag === _constants.POINT_RIGHT_CENTER) {
    rect.width = originRect.width + distance;

    if (flag === _constants.POINT_LEFT_CENTER) {
      rect.left = originRect.left - distance;
    }
  } else if (flag === _constants.POINT_TOP_CENTER || flag === _constants.POINT_BOTTOM_CENTER) {
    rect.height = originRect.height + distance;

    if (flag === _constants.POINT_TOP_CENTER) {
      rect.top = originRect.top - distance;
    }
  } else if (flag === _constants.POINT_LEFT_TOP || flag === _constants.POINT_RIGHT_BOTTOM || flag === _constants.POINT_LEFT_BOTTOM || flag === _constants.POINT_RIGHT_TOP) {
    rect.height = originRect.height + distance * 2;
    rect.width = originRect.width + distance * 2;
    rect.top = originRect.top - distance;
    rect.left = originRect.left - distance;
  } else if (flag === _constants.ALL_ITEM) {
    // 移动整个编辑框
    var x = value.x,
        y = value.y;
    rect.top = originRect.top + y;
    rect.left = originRect.left + x;
  } else if (flag === _constants.POINT_ROTATE) {
    // const { moveBoundRect } = obj;
    var moveBoundRect = obj.moveTag.boundRect;
    var coordStart = value.coordStart,
        coordEnd = value.coordEnd;
    var _x2 = moveBoundRect.x,
        _y2 = moveBoundRect.y,
        width = moveBoundRect.width,
        height = moveBoundRect.bottom;
    var ox = _x2 + width / 2;
    var oy = _y2 + height / 2;
    var ax = ox;
    var ay = _y2;
    var oa = {
      x: ax - ox,
      y: ay - oy
    };
    var ob = {
      x: coordEnd.x - ox,
      y: coordEnd.y - oy
    };
    var ab = {
      x: coordEnd.x - ax,
      y: coordEnd.y - ay
    };
    var a = Math.sqrt(Math.pow(oa.x, 2) + Math.pow(oa.y, 2));
    var b = Math.sqrt(Math.pow(ob.x, 2) + Math.pow(ob.y, 2));
    var c = Math.sqrt(Math.pow(ab.x, 2) + Math.pow(ab.y, 2));
    var dis = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b); // console.log(moveBoundRect, 'change', oa, ob, ab, a, b, c, ab, dis);

    dis = Math.acos(dis) * (180 / Math.PI);

    if (coordEnd.x > ox) {// 小于180°夹角
    } else {
      dis = -dis;
    }

    rect.rotate = Math.floor(dis);
  }
}

function change(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.MOVE_CHANGE) {
    var editList = obj.editList,
        moveTag = obj.moveTag,
        activeEditKey = obj.activeEditKey,
        groupList = obj.groupList;
    var distance = value.distance; // const { rect } = editList[activeEditKey];

    var boundRect = moveTag.boundRect,
        flag = moveTag.key,
        rectMap = moveTag.rectMap;
    var groupKeys = {};
    var moveItemGroupKeys = {};
    activeEditKey.forEach(function (it) {
      // console.log(it, rectMap[it], rectMap);
      var item = editList[it];
      var belong = item.belong,
          nodeType = item.nodeType;

      if (flag === _constants.POINT_ROTATE) {
        var rect = performRect(flag, rectMap[it], value, boundRect);
        Object.assign(item.rect, rect);
        return;
      }

      if (nodeType === _constants.ITEM_TYPE_GROUP) {
        groupKeys[it] = true;
      } else if (belong) {
        moveItemGroupKeys[belong] = [it];
      } else {
        var _rect = performRect(flag, rectMap[it], value, boundRect);

        Object.assign(item.rect, _rect);
      }
    });
    Object.keys(groupKeys).forEach(function (key) {
      var itemList = groupList[key];
      var rectList = itemList.map(function (it) {
        return Object.assign({}, rectMap[it], performRect(flag, rectMap[it], value, boundRect));
      });
      Object.assign(editList[key].rect, (0, _utils.performGroupRect)(rectList));
      var currentGroupRect = editList[key].rect;
      itemList.forEach(function (it, index) {
        var r = rectList[index];
        Object.assign(editList[it].rect, r, {
          top: r.top - currentGroupRect.top,
          left: r.left - currentGroupRect.left
        });
      });
    });
    Object.keys(moveItemGroupKeys).forEach(function (key) {
      var itemList = groupList[key];
      var moveItem = moveItemGroupKeys[key];
      var rectList = itemList.map(function (it) {
        if (moveItem.indexOf(it) === -1) {
          return rectMap[it];
        }

        return Object.assign({}, rectMap[it], performRect(flag, rectMap[it], value, boundRect));
      });
      Object.assign(editList[key].rect, (0, _utils.performGroupRect)(rectList));
      var currentGroupRect = editList[key].rect;
      itemList.forEach(function (it, index) {
        var r = rectList[index];
        Object.assign(editList[it].rect, r, {
          top: r.top - currentGroupRect.top,
          left: r.left - currentGroupRect.left
        });
      });
    }); // activeEditKey.forEach((it) => {
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

    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function create(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.CREATE_ITEM_STORE) {
    var editList = obj.editList; // { 唯一标识, 组件类型 }

    var uniqueId = value.uniqueId,
        componentType = value.type;
    editList[uniqueId] = (0, _utils.createEditItem)(componentType); // pages[activePage].push(uniqueId);

    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function resetContentHeight(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.RESET_CONTENT_HEIGHT) {
    var editList = obj.editList;
    var height = value.height,
        key = value.key;
    var rect = editList[key].rect;

    if (rect.height < height) {
      rect.height = height;
    }

    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function changeActiveEditKey(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.CHANGE_ACTIVE_EDIT_KEY) {
    obj.activeEditKey = [value];
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function addAttrs(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.ADD_ITEM_ATTRS) {
    var attrs = value.attrs,
        key = value.key;
    var editList = obj.editList;
    editList[key].attrs = attrs;
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function changeAttrs(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.CHANGE_ITEM_ATTR) {
    var attrs = value.attrs,
        key = value.key;
    var editList = obj.editList;
    Object.assign(editList[key].attrs, attrs);
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function changeActiveItemAttrs(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.ACTION_CHANGE_ACTIVE_ITEM_ATTRS) {
    var attrs = value;
    var editList = obj.editList,
        activeEditKey = obj.activeEditKey;

    if (activeEditKey.length === 1) {
      Object.assign(editList[activeEditKey[0]].attrs, attrs);
    }

    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function changeBaseStyle(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.CHANGE_ITEM_BASE_STYLE) {
    var style = value.style,
        key = value.key;
    var editList = obj.editList;
    Object.assign(editList[key].rect, style);
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function changeAnimation(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.CHANGE_ANIMATION) {
    var style = value.style,
        key = value.key,
        index = value.index;
    var editList = obj.editList;
    var item = editList[key].animates[index];
    Object.assign(item, style);
    editList[key].previewAnimates = [item];
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function createPage(store, action) {
  var type = action.type;
  var obj = store.toJS();

  if (type === _constants.STORE_ADD_PAGE) {
    var pages = obj.pages;
    pages.push([]);
    obj.activePage = pages.length - 1;
    obj.activeEditKey = [];
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function changeActivePage(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.CHANGE_ACTIVE_PAGE) {
    obj.activePage = value;
    obj.activeEditKey = [];
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function addPageItem(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.ADD_PAGE_ITEM) {
    var editList = obj.editList,
        activePage = obj.activePage,
        pages = obj.pages; // { 唯一标识, 组件类型 }

    var uniqueId = (0, _IDManage.createId)();
    var page = pages[activePage]; // 给组件命名

    var name = "".concat((0, _core.getComponentDefaultName)(value), " ").concat(page.length + 1);
    editList[uniqueId] = (0, _utils.createNode)(value, name);
    Object.assign(editList[uniqueId].attrs, (0, _core.getComponentDefaultAttrs)(value));
    Object.assign(editList[uniqueId].rect, (0, _core.getComponentDefaultSize)(value));
    page.push(uniqueId); // 设置当前添加的元素为激活项

    obj.activeEditKey = [uniqueId];
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function addPageItemWithAttrs(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.ACTION_ADD_PAGE_ITEM_WITH_ATTRS) {
    var editList = obj.editList,
        activePage = obj.activePage,
        pages = obj.pages; // { 唯一标识, 组件类型 }

    var uniqueId = (0, _IDManage.createId)();
    var page = pages[activePage]; // 给组件命名

    var name = "".concat((0, _core.getComponentDefaultName)(value.type), " ").concat(page.length + 1);
    editList[uniqueId] = (0, _utils.createNode)(value.type, name);
    Object.assign(editList[uniqueId].attrs, (0, _core.getComponentDefaultAttrs)(value.type), value.attrs);
    Object.assign(editList[uniqueId].rect, (0, _core.getComponentDefaultSize)(value.type));
    page.push(uniqueId); // 设置当前添加的元素为激活项

    obj.activeEditKey = [uniqueId];
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function addPageItemWithSize(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.ACTION_ADD_PAGE_ITEM_WITH_SIZE) {
    var editList = obj.editList,
        activePage = obj.activePage,
        pages = obj.pages; // { 唯一标识, 组件类型 }

    var uniqueId = (0, _IDManage.createId)();
    var page = pages[activePage]; // 给组件命名

    var name = "".concat((0, _core.getComponentDefaultName)(value.type), " ").concat(page.length + 1);
    editList[uniqueId] = (0, _utils.createNode)(value.type, name);
    Object.assign(editList[uniqueId].rect, value.size);
    page.push(uniqueId); // 设置当前添加的元素为激活项

    obj.activeEditKey = [uniqueId];
    return (0, _immutable.fromJS)(obj);
  }

  return null;
} // 移除元素


function removeItem(store, action) {
  var type = action.type;
  var obj = store.toJS();

  if (type === _constants.REMOVE_ITEM) {
    var activeEditKey = obj.activeEditKey,
        activePage = obj.activePage,
        pages = obj.pages; // { 唯一标识, 组件类型 }

    var page = pages[activePage];
    var delIndex = -1; // 当前只支持单个移除

    if (activeEditKey.length === 1) {
      page.forEach(function (it, index) {
        if (activeEditKey.indexOf(it) > -1) delIndex = index;
      });
      page.splice(delIndex, 1);
      obj.activeEditKey = [];
    }

    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function saveMoveTagBoundingClientRect(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.SAVE_MOVE_START_RECT) {
    obj.moveBoundRect = value;
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function resortPageItem(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.PAGE_ITEM_RESORT) {
    var activePage = obj.activePage,
        pages = obj.pages;
    pages[activePage] = value;
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function changeBackGround(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.CHANGE_ALL_PAGE_BACKGROUND) {
    obj.backGroundImage = value;
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function resetStore(store, action) {
  var actionType = action.type,
      value = action.value; // const obj = store.toJS();

  if (actionType === _constants.STORE_RESET_TO_EDIT) {
    var list = value.list,
        backGroundImage = value.backGroundImage;
    var pages = [];
    var editList = {};
    list.forEach(function (it) {
      var page = [];
      it.forEach(function (item, i) {
        var type = item.type;
        var uniqueId = (0, _IDManage.createId)();
        page.push(uniqueId);
        editList[uniqueId] = _objectSpread({
          name: "".concat((0, _core.getComponentDefaultName)(type)).concat(i)
        }, JSON.parse(JSON.stringify(item)));
      });
      pages.push(page);
    });
    var ob = {
      moveTag: false,
      editList: editList,
      groupList: {},
      activeEditKey: [],
      pages: pages,
      activePage: 0,
      moveBoundRect: {},
      backGroundImage: backGroundImage
    };
    return (0, _immutable.fromJS)(ob);
  }

  return null;
}

function changeBackMusicUrl(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.STORE_CHANGE_BACK_MUSIC_URL) {
    obj.backMusicUrl = value;
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function addActiveEditKey(store, action) {
  var type = action.type,
      value = action.value;
  var obj = store.toJS();

  if (type === _constants.ADD_ACTIVE_EDIT_KEY) {
    if (obj.activeEditKey.indexOf(value) === -1) {
      obj.activeEditKey.push(value);
    }

    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function groupActiveEditKeys(store, action) {
  var type = action.type;
  var obj = store.toJS();

  if (type === _constants.STORE_GROUP_ACTIVE_EDIT_KEYS) {
    var activeEditKey = obj.activeEditKey,
        groupList = obj.groupList,
        editList = obj.editList,
        pages = obj.pages,
        activePage = obj.activePage;

    if (activeEditKey && activeEditKey.length > 1) {
      var uniqueId = (0, _IDManage.createId)();
      groupList[uniqueId] = [].concat(activeEditKey);
      editList[uniqueId] = (0, _utils.createGroup)("\u7EC4".concat(Object.keys(groupList).length));
      var groupItem = editList[uniqueId];
      var itemRectList = activeEditKey.map(function (it) {
        return editList[it].rect;
      });
      Object.assign(groupItem.rect, (0, _utils.performGroupRect)(itemRectList));
      activeEditKey.forEach(function (it) {
        var item = editList[it];
        item.belong = uniqueId;
        Object.assign(item.rect, {
          left: item.rect.left - groupItem.rect.left,
          top: item.rect.top - groupItem.rect.top
        });
        var page = pages[activePage];
        var index = page.indexOf(it);
        page.splice(index, 1);
      });
      obj.activeEditKey = [uniqueId];
      pages[activePage].push(uniqueId);
    }

    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function splitGroupActiveEditKeys(store, action) {
  var type = action.type;
  var obj = store.toJS();

  if (type === _constants.STORE_GROUP_SPLIT) {
    var activeEditKey = obj.activeEditKey,
        groupList = obj.groupList,
        editList = obj.editList,
        pages = obj.pages,
        activePage = obj.activePage;

    if (activeEditKey && activeEditKey.length === 1) {
      var editKey = activeEditKey[0];
      var item = editList[editKey];
      var groupKey = item.belong || item.nodeType === _constants.ITEM_TYPE_GROUP && editKey;

      if (groupKey) {
        // 该元素移除可见元素
        var page = pages[activePage];
        var index = page.indexOf(groupKey);
        page.splice(index, 1);
        var groupItemsList = groupList[groupKey];
        var groupItem = editList[groupKey];
        groupItemsList.forEach(function (k) {
          var it = editList[k];
          delete it.belong;
          Object.assign(it.rect, {
            left: it.rect.left + groupItem.rect.left,
            top: it.rect.top + groupItem.rect.top
          });
          page.push(k);
        });
        obj.activeEditKey = [];
      }
    }

    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function initStore(store, action) {
  var type = action.type,
      value = action.value;

  if (type === _constants.STORE_INIT_TO_EDIT) {
    return (0, _immutable.fromJS)(value);
  }

  return null;
}

function initHistoryStore(store, action) {
  var type = action.type,
      value = action.value;

  if (type === _constants.ACTION_INIT_HISTORY_STORE) {
    return (0, _immutable.fromJS)(value);
  }

  return null;
}

function copyPage(store, action) {
  var type = action.type;

  if (type === _constants.ACTION_COPY_PAGE) {
    var obj = store.toJS();
    var groupList = obj.groupList,
        editList = obj.editList,
        pages = obj.pages,
        activePage = obj.activePage;
    var page = pages[activePage];
    var result = [];
    var cloneGroupList = {};
    page.forEach(function (key) {
      var item = editList[key];
      var itemObj = (0, _utils.deepCopy)(item);
      var uniqueId = (0, _IDManage.createId)();
      editList[uniqueId] = itemObj;
      result.push(uniqueId);
      var nodeType = item.nodeType;

      if (nodeType === _constants.ITEM_TYPE_GROUP) {
        cloneGroupList[key] = uniqueId;
      }
    });
    Object.keys(cloneGroupList).forEach(function (key) {
      groupList[key].forEach(function (k) {
        var item = editList[k];
        var itemObj = (0, _utils.deepCopy)(item);
        var uniqueId = (0, _IDManage.createId)();
        editList[uniqueId] = itemObj;
        itemObj.belong = cloneGroupList[key];
      });
    });
    obj.activePage = pages.length;
    obj.activeEditKey = [];
    pages.push(result);
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function copyItem(store, action) {
  var type = action.type,
      value = action.value;

  if (type === _constants.ACTION_COPY_ITEM) {
    var obj = store.toJS();
    var groupList = obj.groupList,
        editList = obj.editList,
        pages = obj.pages,
        activePage = obj.activePage;
    var item = editList[value];
    var rect = item.rect,
        animate = item.animate,
        attrs = item.attrs,
        nodeType = item.nodeType,
        name = item.name,
        belong = item.belong;
    var uniqueId = (0, _IDManage.createId)();
    var page = pages[activePage];
    editList[uniqueId] = (0, _utils.createNode)(item.type, "".concat(name, " \u62F7\u8D1D"), belong); // 拷贝属性

    editList[uniqueId].rect = Object.assign({}, rect);
    editList[uniqueId].animate = Object.assign({}, animate);
    editList[uniqueId].attrs = Object.assign({}, attrs);

    if (nodeType === _constants.ITEM_TYPE_SINGLE) {
      if (belong) {
        // 组内元素，不需要挂载到页面上，只要挂在组节点下
        groupList[belong].push(uniqueId);
      } else {
        page.push(uniqueId);
      }
    } else {} // 拷贝组元素，需要拷贝各个节点
    // 设置当前添加的元素为激活项


    obj.activeEditKey = [uniqueId];
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function deletePage(store, action) {
  var type = action.type;

  if (type === _constants.ACTION_DELETE_PAGE) {
    var obj = store.toJS();
    var pages = obj.pages,
        activePage = obj.activePage; // 必须保留一个页面

    if (pages.length > 1) {
      pages.splice(activePage, 1);

      if (activePage === pages.length) {
        obj.activePage = activePage - 1;
      }
    }

    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function changeItemBorder(store, action) {
  var type = action.type,
      value = action.value;

  if (type === _constants.ACTION_CHANGE_ITEM_BORDER) {
    var obj = store.toJS();
    var border = value.border,
        key = value.key;
    var editList = obj.editList; // 临时方案

    if (!editList[key].border) editList[key].border = {
      style: 'solid'
    };
    Object.assign(editList[key].border, border);
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function changeItemName(store, action) {
  var type = action.type,
      value = action.value;

  if (type === _constants.ACTION_CHANGE_ITEM_NAME) {
    var obj = store.toJS();
    var name = value.name,
        key = value.key;
    var editList = obj.editList;
    editList[key].name = name;
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function resortGroupItem(store, action) {
  var type = action.type,
      value = action.value;

  if (type === _constants.ACTION_RESORT_GROUP_ITEM) {
    var obj = store.toJS();
    var list = value.list,
        key = value.key;
    var groupList = obj.groupList;
    groupList[key] = list;
    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function movePageToDown(store, action) {
  var type = action.type;

  if (type === _constants.ACTION_PAGE_MOVE_DOWN) {
    var obj = store.toJS();
    var activePage = obj.activePage,
        pages = obj.pages;

    if (activePage + 1 < pages.length) {
      var before = activePage;
      var after = activePage + 1;
      var tmp = pages[after];
      pages[after] = pages[before];
      pages[before] = tmp;
      obj.activePage = activePage + 1;
    }

    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function movePageToUp(store, action) {
  var type = action.type;

  if (type === _constants.ACTION_PAGE_MOVE_UP) {
    var obj = store.toJS();
    var activePage = obj.activePage,
        pages = obj.pages;

    if (activePage - 1 > 0) {
      var before = activePage;
      var after = activePage - 1;
      var tmp = pages[after];
      pages[after] = pages[before];
      pages[before] = tmp;
      obj.activePage = activePage - 1;
    }

    return (0, _immutable.fromJS)(obj);
  }

  return null;
}

function addAnimate(store, action) {
  var type = action.type,
      value = action.value;

  if (type === _constants.ACTION_ANIMATES_ADD) {
    var obj = store.toJS();
    var activeEditKey = obj.activeEditKey,
        editList = obj.editList;

    if (activeEditKey.length === 1) {
      var item = editList[activeEditKey[0]];
      if (!item.animates) item.animates = [];
      var animate = {
        name: value,
        duration: 1,
        delay: 0,
        repeat: 1
      };
      item.animates.push(animate);
      item.previewAnimates = [animate]; // item.pre;

      return (0, _immutable.fromJS)(obj);
    }
  }

  return null;
}

function changeAnimate(store, action) {
  var type = action.type,
      value = action.value;

  if (type === _constants.ACTION_ANIMATES_CHANGE) {
    var obj = store.toJS();
    var activeEditKey = obj.activeEditKey,
        editList = obj.editList;

    if (activeEditKey.length === 1) {
      var attrs = value.attrs,
          index = value.index;
      var item = editList[activeEditKey[0]];
      Object.assign(item.animates[index], attrs);
      item.previewAnimates = [item.animates[index]];
      return (0, _immutable.fromJS)(obj);
    }
  }

  return null;
}

function previewAnimate(store, action) {
  var type = action.type;

  if (type === _constants.ACTION_ANIMATES_PREVIEW) {
    var obj = store.toJS();
    var activeEditKey = obj.activeEditKey,
        editList = obj.editList;

    if (activeEditKey.length === 1) {
      var item = editList[activeEditKey[0]];
      item.previewAnimates = item.animates;
      return (0, _immutable.fromJS)(obj);
    }
  }

  return null;
}

function removeAnimate(store, action) {
  var type = action.type,
      value = action.value;

  if (type === _constants.ACTION_ANIMATES_REMOVE) {
    var obj = store.toJS();
    var activeEditKey = obj.activeEditKey,
        editList = obj.editList;

    if (activeEditKey.length === 1) {
      var item = editList[activeEditKey[0]];
      item.animates.splice(value, 1);
      item.previewAnimates = [];
      return (0, _immutable.fromJS)(obj);
    }
  }

  return null;
}

function hoverAnimate(store, action) {
  var type = action.type,
      value = action.value;

  if (type === _constants.ACTION_ANIMATES_HOVER) {
    var obj = store.toJS();
    var activeEditKey = obj.activeEditKey,
        editList = obj.editList;

    if (activeEditKey.length === 1) {
      var item = editList[activeEditKey[0]];
      item.previewAnimates = [{
        name: value,
        duration: 1,
        repeat: 1,
        delay: 0
      }];
      return (0, _immutable.fromJS)(obj);
    }
  }

  return null;
}

function emptyAnimate(store, action) {
  var type = action.type;

  if (type === _constants.ACTION_ANIMATES_EMPTY) {
    var obj = store.toJS();
    var activeEditKey = obj.activeEditKey,
        editList = obj.editList;

    if (activeEditKey.length === 1) {
      var item = editList[activeEditKey[0]];
      item.previewAnimates = [];
      return (0, _immutable.fromJS)(obj);
    }
  }

  return null;
}

function previewAnimateWithIndex(store, action) {
  var type = action.type,
      value = action.value;

  if (type === _constants.ACTION_ANIMATES_PREVIEW_ONE) {
    var obj = store.toJS();
    var activeEditKey = obj.activeEditKey,
        editList = obj.editList;

    if (activeEditKey.length === 1) {
      var item = editList[activeEditKey[0]];
      var animates = item.animates;
      item.previewAnimates = [animates[value]];
      return (0, _immutable.fromJS)(obj);
    }
  }

  return null;
}

function changeMultiActiveAlignLeft(store, action) {
  var type = action.type;

  if (type === _constants.ACTION_MULTI_ALIGN_LEFT) {
    var obj = store.toJS();
    var activeEditKey = obj.activeEditKey,
        editList = obj.editList;

    if (activeEditKey.length > 1) {
      var minLeft = 0;
      var activeItems = [];
      activeEditKey.forEach(function (it, index) {
        var item = editList[it];
        var rect = item.rect;
        activeItems.push(item);
        var left = rect.left;
        if (index === 0) minLeft = left;else minLeft = Math.min(minLeft, left);
      });
      activeItems.forEach(function (it) {
        return Object.assign(it.rect, {
          left: minLeft
        });
      });
      return (0, _immutable.fromJS)(obj);
    }
  }

  return null;
}

function changeMultiActiveAlignRight(store, action) {
  var type = action.type;

  if (type === _constants.ACTION_MULTI_ALIGN_RIGHT) {
    var obj = store.toJS();
    var activeEditKey = obj.activeEditKey,
        editList = obj.editList;

    if (activeEditKey.length > 1) {
      var result = 0;
      var activeItems = [];
      activeEditKey.forEach(function (it, index) {
        var item = editList[it];
        var rect = item.rect;
        activeItems.push(item);
        var left = rect.left,
            width = rect.width;
        if (index === 0) result = left + width;else result = Math.max(result, left + width);
      });
      activeItems.forEach(function (it) {
        return Object.assign(it.rect, {
          left: result - it.rect.width
        });
      });
      return (0, _immutable.fromJS)(obj);
    }
  }

  return null;
}

function changeMultiActiveAlignTop(store, action) {
  var type = action.type;

  if (type === _constants.ACTION_MULTI_ALIGN_TOP) {
    var obj = store.toJS();
    var activeEditKey = obj.activeEditKey,
        editList = obj.editList;

    if (activeEditKey.length > 1) {
      var minLeft = 0;
      var activeItems = [];
      activeEditKey.forEach(function (it, index) {
        var item = editList[it];
        var rect = item.rect;
        activeItems.push(item);
        var top = rect.top;
        if (index === 0) minLeft = top;else minLeft = Math.min(minLeft, top);
      });
      activeItems.forEach(function (it) {
        return Object.assign(it.rect, {
          top: minLeft
        });
      });
      return (0, _immutable.fromJS)(obj);
    }
  }

  return null;
}

function changeMultiActiveAlignBottom(store, action) {
  var type = action.type;

  if (type === _constants.ACTION_MULTI_ALIGN_BOTTOM) {
    var obj = store.toJS();
    var activeEditKey = obj.activeEditKey,
        editList = obj.editList;

    if (activeEditKey.length > 1) {
      var result = 0;
      var activeItems = [];
      activeEditKey.forEach(function (it, index) {
        var item = editList[it];
        var rect = item.rect;
        activeItems.push(item);
        var top = rect.top,
            height = rect.height;
        if (index === 0) result = top + height;else result = Math.max(result, height + top);
      });
      activeItems.forEach(function (it) {
        return Object.assign(it.rect, {
          top: result - it.rect.height
        });
      });
      return (0, _immutable.fromJS)(obj);
    }
  }

  return null;
}

function changeMultiActiveAlignCenterHorizontal(store, action) {
  var type = action.type;

  if (type === _constants.ACTION_MULTI_ALIGN_CENTER_HORIZONTAL) {
    var obj = store.toJS();
    var activeEditKey = obj.activeEditKey,
        editList = obj.editList;

    if (activeEditKey.length > 1) {
      activeEditKey.forEach(function (it) {
        var item = editList[it];
        var rect = item.rect;
        var width = rect.width;
        var left = (_utils.winSize.width - width) / 2;
        Object.assign(item.rect, {
          left: left
        });
      });
      return (0, _immutable.fromJS)(obj);
    }
  }

  return null;
}

function changeMultiActiveAlignCenterVertical(store, action) {
  var type = action.type;

  if (type === _constants.ACTION_MULTI_ALIGN_CENTER_VERTICAL) {
    var obj = store.toJS();
    var activeEditKey = obj.activeEditKey,
        editList = obj.editList;

    if (activeEditKey.length > 1) {
      activeEditKey.forEach(function (it) {
        var item = editList[it];
        var rect = item.rect;
        var height = rect.height;
        var top = (_utils.winSize.height - height) / 2;
        Object.assign(item.rect, {
          top: top
        });
      });
      return (0, _immutable.fromJS)(obj);
    }
  }

  return null;
}

function changeSingleActiveAlignLeft(store, action) {
  var type = action.type;

  if (type === _constants.ACTION_ACTVIE_ALIGN_LEFT) {
    var obj = store.toJS();
    var activeEditKey = obj.activeEditKey,
        editList = obj.editList;

    if (activeEditKey.length === 1) {
      var item = editList[activeEditKey[0]];
      Object.assign(item.rect, {
        left: 0
      });
      return (0, _immutable.fromJS)(obj);
    }
  }

  return null;
}

function changeSingleActiveAlignRight(store, action) {
  var type = action.type;

  if (type === _constants.ACTION_ACTVIE_ALIGN_RIGHT) {
    var obj = store.toJS();
    var activeEditKey = obj.activeEditKey,
        editList = obj.editList;

    if (activeEditKey.length === 1) {
      var item = editList[activeEditKey[0]];
      Object.assign(item.rect, {
        left: _utils.winSize.width - item.rect.width
      });
      return (0, _immutable.fromJS)(obj);
    }
  }

  return null;
}

function changeSingleActiveAlignTop(store, action) {
  var type = action.type;

  if (type === _constants.ACTION_ACTVIE_ALIGN_TOP) {
    var obj = store.toJS();
    var activeEditKey = obj.activeEditKey,
        editList = obj.editList;

    if (activeEditKey.length === 1) {
      var item = editList[activeEditKey[0]];
      Object.assign(item.rect, {
        top: 0
      });
      return (0, _immutable.fromJS)(obj);
    }
  }

  return null;
}

function changeSingleActiveAlignBottom(store, action) {
  var type = action.type;

  if (type === _constants.ACTION_ACTVIE_ALIGN_BOTTOM) {
    var obj = store.toJS();
    var activeEditKey = obj.activeEditKey,
        editList = obj.editList;

    if (activeEditKey.length === 1) {
      var item = editList[activeEditKey[0]];
      Object.assign(item.rect, {
        top: _utils.winSize.height - item.rect.height
      });
      return (0, _immutable.fromJS)(obj);
    }
  }

  return null;
}

var _default = [startMove, endMove, change, create, resetContentHeight, changeActiveEditKey, addAttrs, changeAttrs, changeBaseStyle, createPage, changeActivePage, addPageItem, removeItem, saveMoveTagBoundingClientRect, resortPageItem, changeBackGround, resetStore, changeBackMusicUrl, addActiveEditKey, groupActiveEditKeys, changeAnimation, splitGroupActiveEditKeys, initStore, copyPage, copyItem, deletePage, addPageItemWithAttrs, initHistoryStore, addPageItemWithSize, changeItemBorder, changeItemName, resortGroupItem, movePageToDown, movePageToUp, addAnimate, changeAnimate, previewAnimate, removeAnimate, hoverAnimate, emptyAnimate, previewAnimateWithIndex, changeMultiActiveAlignLeft, changeMultiActiveAlignRight, changeMultiActiveAlignTop, changeMultiActiveAlignBottom, changeMultiActiveAlignCenterHorizontal, changeMultiActiveAlignCenterVertical, changeActiveItemAttrs, changeSingleActiveAlignLeft, changeSingleActiveAlignRight, changeSingleActiveAlignTop, changeSingleActiveAlignBottom];
exports["default"] = _default;