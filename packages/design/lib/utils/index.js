"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkQuadrant = checkQuadrant;
exports.createRandom = createRandom;
exports.createEditItem = createEditItem;
exports.createNode = createNode;
exports.createGroup = createGroup;
exports.getAroundRect = getAroundRect;
exports.debounce = debounce;
exports.performGroupRect = performGroupRect;
exports.translateShowDataFromStore = translateShowDataFromStore;
exports.deepCopy = deepCopy;
exports.deleteUnUseObject = deleteUnUseObject;
exports.generatorTexttextShadow = generatorTexttextShadow;
exports.winSize = exports["default"] = void 0;

var _constants = require("@lzshow/constants");

var _utils = require("@lzshow/utils");

function lzlog() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  var args = Array.prototype.slice.call(params);
  args.unshift('LZ: ');
  console.log.apply(this, args);
}
/**
 * 检测制定点在另一个点组成的坐标系中的位置
 * @param {Object} pos 指定点
 * @param {Object} reference 参照物
 * @return 1：第一象限；2：第二象限；3：第三象限；4：第四象限
 */


function checkQuadrant(pos, reference) {
  if (reference.y - pos.y > 0) {
    if (reference.x - pos.x > 0) {
      return _constants.QUADRANT_SECOND;
    }

    return _constants.QUADRANT_FIRST;
  }

  if (reference.x - pos.x > 0) {
    return _constants.QUADRANT_THREE;
  }

  return _constants.QUADRANT_FOUR;
}
/**
 * 创建随机字符
 * @param {*} type 类型
 * @param {*} len 长度
 */


function createRandom() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  var pool = '1234567890qwertyuiiopasdfghjklzxcvbnm';
  var poolSize = pool.length;
  var result = '';

  for (var i = 0; i < len; i += 1) {
    result += pool[Math.floor(Math.random() * poolSize)];
  }

  return result;
}
/**
 * 创建每个编辑组件所需默认参数
 */


function createEditItem(type, name, nodeType, belong) {
  var result = {
    // 组件名称
    name: name,
    nodeType: nodeType,
    rect: {
      top: 0,
      left: 0,
      width: 320,
      height: 0,
      rotate: 0
    },
    animates: [],
    previewAnimates: [],
    border: {
      style: 'solid',
      color: '#000000',
      width: 0,
      radius: 0
    },
    attrs: {}
  };

  if (belong) {
    result.belong = belong;
  }

  if (type) result.type = type;
  return result;
}
/**
 * 创建单个元素
 * @param {*} type
 * @param {*} name
 * @param {*} belong
 */


function createNode(type, name, belong) {
  return createEditItem(type, name, _constants.ITEM_TYPE_SINGLE, belong);
}
/**
 * 创建分组元素
 * @param {*} type
 * @param {*} name
 */


function createGroup(name) {
  return createEditItem(null, name, _constants.ITEM_TYPE_GROUP);
}
/**
 * 获取分组后，最大包围内容的矩形尺寸
 * @param {*} group
 * @param {*} editList
 */


function getAroundRect(group, editList) {
  var rect = {};
  var left = 0;
  var top = 0;
  var right = 0;
  var bottom = 0;
  group.forEach(function (uniqueId, index) {
    var item = editList[uniqueId];
    var itemRect = item.rect;

    if (index === 0) {
      /* eslint-disable-next-line prefer-destructuring */
      left = itemRect.left;
      /* eslint-disable-next-line prefer-destructuring */

      top = itemRect.top;
      /* eslint-disable-next-line prefer-destructuring */

      right = itemRect.width + left;
      /* eslint-disable-next-line prefer-destructuring */

      bottom = itemRect.height + top;
    } else {
      left = Math.min(left, itemRect.left);
      top = Math.min(top, itemRect.top);
      right = Math.max(right, itemRect.width + itemRect.left);
      bottom = Math.max(bottom, itemRect.height + itemRect.top);
    }
  });
  rect.left = left;
  rect.top = top;
  rect.width = right - left;
  rect.height = bottom - top;
  return rect;
}

function debounce(fn) {
  var _this = this;

  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var timer;
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var th = _this;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      timer = null;
      fn.apply(th, args);
    }, delay);
  };
}

var _default = lzlog; // export testType;

exports["default"] = _default;

function performGroupRect(arr) {
  var rect = {};
  var left = 0;
  var top = 0;
  var right = 0;
  var bottom = 0;
  arr.forEach(function (itemRect, index) {
    if (index === 0) {
      /* eslint-disable-next-line prefer-destructuring */
      left = itemRect.left;
      /* eslint-disable-next-line prefer-destructuring */

      top = itemRect.top;
      /* eslint-disable-next-line prefer-destructuring */

      right = itemRect.width + left;
      /* eslint-disable-next-line prefer-destructuring */

      bottom = itemRect.height + top;
    } else {
      left = Math.min(left, itemRect.left);
      top = Math.min(top, itemRect.top);
      right = Math.max(right, itemRect.width + itemRect.left);
      bottom = Math.max(bottom, itemRect.height + itemRect.top);
    }
  });
  rect.left = left;
  rect.top = top;
  rect.width = right - left;
  rect.height = bottom - top;
  return rect;
}

var winSize = {
  width: 320,
  height: 480
};
exports.winSize = winSize;

function translateShowDataFromStore(store) {
  var pages = store.pages,
      editList = store.editList,
      backGroundImage = store.backGroundImage,
      backMusicUrl = store.backMusicUrl,
      groupList = store.groupList;
  var result = [];
  pages.forEach(function (it) {
    var arr = [];
    it.forEach(function (item) {
      var nodeType = editList[item].nodeType;

      if (nodeType === _constants.ITEM_TYPE_GROUP) {
        var groupItems = groupList[item];
        var rect = editList[item].rect;
        groupItems.forEach(function (key) {
          var obj = editList[key];
          Object.assign(obj.rect, {
            top: rect.top + obj.rect.top,
            left: rect.left + obj.rect.left
          });
          arr.push(obj);
        });
        return;
      }

      var obj = editList[item];

      if (obj) {
        arr.push(obj);
      }
    });
    result.push(arr);
  });
  return {
    backMusicUrl: backMusicUrl,
    backGroundImage: backGroundImage,
    list: result
  };
}

function deepCopy(obj) {
  if ((0, _utils.isObject)(obj)) {
    var result = {};
    Object.keys(obj).forEach(function (key) {
      result[key] = deepCopy(obj[key]);
    });
    return result;
  }

  if ((0, _utils.isArray)(obj)) {
    return obj.map(function (it) {
      return deepCopy(it);
    });
  }

  return obj;
}
/**
 * 移除未被使用的对象
 * @param {String|Object} str
 */


function deleteUnUseObject(str) {
  try {
    var store = JSON.parse(str);
    var editList = store.editList,
        pages = store.pages,
        groupList = store.groupList;
    var allItemKeys = Object.keys(editList);
    var allGroupKeys = Object.keys(groupList);
    var useItemKeys = {};
    var useGroupKeys = {};
    pages.forEach(function (page) {
      page.forEach(function (it) {
        var item = editList[it];
        var nodeType = item.nodeType;

        if (nodeType === _constants.ITEM_TYPE_GROUP) {
          useGroupKeys[it] = true;
          var groupItems = groupList[it];
          groupItems.forEach(function (that) {
            useItemKeys[that] = true;
          });
        }

        useItemKeys[it] = true;
      });
    });
    allItemKeys.forEach(function (it) {
      if (!useItemKeys[it]) {
        editList[it] = null;
      }
    });
    allGroupKeys.forEach(function (it) {
      if (!useGroupKeys[it]) {
        groupList[it] = null;
      }
    }); // 如果场景中未添加物料，不允许发布

    if (Object.keys(useItemKeys).length === 0) return null;
    return JSON.stringify(store);
  } catch (error) {
    return null;
  }
}

function generatorTexttextShadow() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var textShadowX = obj.textShadowX,
      textShadowY = obj.textShadowY,
      textShadowSpread = obj.textShadowSpread,
      textShadowColor = obj.textShadowColor,
      textSolidSize = obj.textSolidSize,
      textSolidColor = obj.textSolidColor,
      textSolidAngle = obj.textSolidAngle,
      textBorderSize = obj.textBorderSize,
      textBorderColor = obj.textBorderColor; // 阴影

  var textShadow = "".concat(textShadowColor, " ").concat(textShadowX, "px ").concat(textShadowY, "px ").concat(textShadowSpread, "px"); // 立体感

  if (textSolidSize && textSolidSize > 0) {
    var solidTmp = [];

    for (var i = 0; i < +textSolidSize; i += 1) {
      if (textSolidAngle < 45) {
        solidTmp.push("".concat(textSolidColor, " 0px ").concat(-(i + 1), "px 0px"));
      } else if (textSolidAngle < 90) {
        solidTmp.push("".concat(textSolidColor, " ").concat(i + 1, "px ").concat(-(i + 1), "px 0px"));
      } else if (textSolidAngle < 135) {
        solidTmp.push("".concat(textSolidColor, " ").concat(i + 1, "px 0px 0px"));
      } else if (textSolidAngle < 180) {
        solidTmp.push("".concat(textSolidColor, " ").concat(i + 1, "px ").concat(i + 1, "px 0px"));
      } else if (textSolidAngle < 225) {
        solidTmp.push("".concat(textSolidColor, " 0px ").concat(i + 1, "px 0px"));
      } else if (textSolidAngle < 270) {
        solidTmp.push("".concat(textSolidColor, " ").concat(-(i + 1), "px ").concat(i + 1, "px 0px"));
      } else if (textSolidAngle < 315) {
        solidTmp.push("".concat(textSolidColor, " ").concat(-(i + 1), "px 0px 0px"));
      } else if (textSolidAngle < 315) {
        solidTmp.push("".concat(textSolidColor, " ").concat(-(i + 1), "px ").concat(-(i + 1), "px 0px"));
      }
    }

    textShadow = "".concat(solidTmp.join(), ", ").concat(textShadow);
  } // 描边


  if (textBorderSize && textBorderSize > 0) {
    var tmp = [];

    for (var _i = 0; _i <= +textBorderSize; _i += 1) {
      for (var j = 0; j <= +textBorderSize; j += 1) {
        tmp.push("".concat(textBorderColor, " ").concat(-j, "px ").concat(-_i, "px 0px"));
        tmp.push("".concat(textBorderColor, " ").concat(j, "px ").concat(_i, "px 0px"));
        tmp.push("".concat(textBorderColor, " ").concat(_i, "px ").concat(j, "px 0px"));
        tmp.push("".concat(textBorderColor, " ").concat(-_i, "px ").concat(j, "px 0px"));
      }
    }

    textShadow = "".concat(tmp.join(), ", ").concat(textShadow);
  }

  return textShadow;
}