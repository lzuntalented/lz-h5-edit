import {
  QUADRANT_SECOND, QUADRANT_FIRST, QUADRANT_THREE, QUADRANT_FOUR, ITEM_TYPE_GROUP, ITEM_TYPE_SINGLE,
} from '../core/constants';
import { isObject, isArray } from './Tools';
import { getUrlPrefix } from '../services/apiConfig';
import { getFontFamilyOptions } from '../core/config';

function lzlog(...params) {
  const args = Array.prototype.slice.call(params);
  args.unshift('LZ: ');
  console.log.apply(this, args);
}

/**
 * 检测制定点在另一个点组成的坐标系中的位置
 * @param {Object} pos 指定点
 * @param {Object} reference 参照物
 * @return 1：第一象限；2：第二象限；3：第三象限；4：第四象限
 */
export function checkQuadrant(pos, reference) {
  if (reference.y - pos.y > 0) {
    if (reference.x - pos.x > 0) {
      return QUADRANT_SECOND;
    }
    return QUADRANT_FIRST;
  }
  if (reference.x - pos.x > 0) {
    return QUADRANT_THREE;
  }
  return QUADRANT_FOUR;
}

/**
 * 创建随机字符
 * @param {*} type 类型
 * @param {*} len 长度
 */
export function createRandom(len = 6) {
  const pool = '1234567890qwertyuiiopasdfghjklzxcvbnm';
  const poolSize = pool.length;
  let result = '';
  for (let i = 0; i < len; i += 1) {
    result += pool[Math.floor(Math.random() * poolSize)];
  }
  return result;
}


/**
 * 创建每个编辑组件所需默认参数
 */
export function createEditItem(type, name, nodeType, belong) {
  const result = {
    // 组件名称
    name,
    nodeType,
    rect: {
      top: 0,
      left: 0,
      width: 320,
      height: 0,
      rotate: 0,
    },
    animate: {
      // 动画名称
      name: '',
      // 动画执行时间 单位(s)
      duration: 1,
      // 动画延时执行 单位(s)
      delay: 0,
      // 动画重复次数
      repeat: 1,
    },
    border: {
      style: 'solid',
      color: '#000000',
      width: 0,
      radius: 0,
    },
    attrs: {},
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
export function createNode(type, name, belong) {
  return createEditItem(type, name, ITEM_TYPE_SINGLE, belong);
}

/**
 * 创建分组元素
 * @param {*} type
 * @param {*} name
 */
export function createGroup(name) {
  return createEditItem(null, name, ITEM_TYPE_GROUP);
}

/**
 * 获取分组后，最大包围内容的矩形尺寸
 * @param {*} group
 * @param {*} editList
 */
export function getAroundRect(group, editList) {
  const rect = {};
  let left = 0;
  let top = 0;
  let right = 0;
  let bottom = 0;
  group.forEach((uniqueId, index) => {
    const item = editList[uniqueId];
    const itemRect = item.rect;
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

export function debounce(fn, delay = 0) {
  let timer;
  return (...args) => {
    const th = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn.apply(th, args);
    }, delay);
  };
}

export default lzlog;
// export testType;

export function performGroupRect(arr) {
  const rect = {};
  let left = 0;
  let top = 0;
  let right = 0;
  let bottom = 0;
  arr.forEach((itemRect, index) => {
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

export const winSize = {
  width: 320,
  height: 480,
};

export function translateShowDataFromStore(store) {
  const {
    pages, editList, backGroundImage, backMusicUrl, groupList,
  } = store;
  const result = [];
  pages.forEach((it) => {
    const arr = [];
    it.forEach((item) => {
      const { nodeType } = editList[item];
      if (nodeType === ITEM_TYPE_GROUP) {
        const groupItems = groupList[item];
        const { rect } = editList[item];
        groupItems.forEach((key) => {
          const obj = editList[key];
          Object.assign(obj.rect, {
            top: rect.top + obj.rect.top,
            left: rect.left + obj.rect.left,
          });
          arr.push(obj);
        });
        return;
      }
      const obj = editList[item];
      if (obj) {
        arr.push(obj);
      }
    });
    result.push(arr);
  });

  return {
    backMusicUrl,
    backGroundImage,
    list: result,
  };
}

export function deepCopy(obj) {
  if (isObject(obj)) {
    const result = {};
    Object.keys(obj).forEach((key) => { result[key] = deepCopy(obj[key]); });
    return result;
  }
  if (isArray(obj)) {
    return obj.map(it => deepCopy(it));
  }
  return obj;
}

export function addShortFonts(id) {
  const s = window.document.createElement('style');
  s.type = 'text/css';
  window.document.getElementsByTagName('head')[0].appendChild(s);

  const cssTpl = `@font-face {font-family: "$fontName";src: url('${getUrlPrefix()}/static/fonts/${id}/$fontName.ttf');}`;
  const fonts = getFontFamilyOptions();
  let txt = '';
  fonts.forEach((it) => {
    txt += cssTpl.replace(/\$fontName/g, it.key);
  });
  s.innerText = txt;
}

/**
 * 移除未被使用的对象
 * @param {String|Object} str
 */
export function deleteUnUseObject(str) {
  try {
    const store = JSON.parse(str);
    const { editList, pages, groupList } = store;
    const allItemKeys = Object.keys(editList);
    const allGroupKeys = Object.keys(groupList);
    const useItemKeys = {};
    const useGroupKeys = {};
    pages.forEach((page) => {
      page.forEach((it) => {
        const item = editList[it];
        const { nodeType } = item;
        if (nodeType === ITEM_TYPE_GROUP) {
          useGroupKeys[it] = true;
          const groupItems = groupList[it];
          groupItems.forEach((that) => {
            useItemKeys[that] = true;
          });
        }
        useItemKeys[it] = true;
      });
    });

    allItemKeys.forEach((it) => {
      if (!useItemKeys[it]) {
        editList[it] = null;
      }
    });

    allGroupKeys.forEach((it) => {
      if (!useGroupKeys[it]) {
        groupList[it] = null;
      }
    });
    // 如果场景中未添加物料，不允许发布
    if (Object.keys(useItemKeys).length === 0) return null;
    return JSON.stringify(store);
  } catch (error) {
    return null;
  }
}
