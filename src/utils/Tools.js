import {
  COMPONENT_TYPE_PICTURE, COMPONENT_TYPE_ART_INPUT, COMPONENT_TYPE_INPUT, COMPONENT_TYPE_BUTTON, COMPONENT_TYPE_MAP, COMPONENT_TYPE_QQ_VIDEO,
} from '../core/constants';

function isType(type) {
  return obj => Object.prototype.toString.call(obj) === `[object ${type}]`;
}

// let testType = {
//   isFunction: isType("function")
// }

function isTypeOf(type) {
  return obj => typeof obj === type;
}
const isFunction = isType('Function');
const isUndefined = isType('Undefined');
const isArray = Array.isArray || isType('Array');
const isObject = isType('Object');
export {
  isFunction, isUndefined, isArray, isObject,
};

/**
 * 获取指定类型组件的文本描述
 * @param {string} type
 */
export function getNameWithItemType(type) {
  let result = '文本';
  if (type === COMPONENT_TYPE_PICTURE) {
    result = '图片';
  } else if (type === COMPONENT_TYPE_ART_INPUT) {
    result = '艺术字';
  } else if (type === COMPONENT_TYPE_INPUT) {
    result = '输入框';
  } else if (type === COMPONENT_TYPE_BUTTON) {
    result = '按钮';
  } else if (type === COMPONENT_TYPE_MAP) {
    result = '地图';
  } else if (type === COMPONENT_TYPE_QQ_VIDEO) {
    result = 'QQ通话';
  }
  return result;
}
