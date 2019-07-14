import { COMPONENT_TYPE_PICTURE } from '../core/constants';

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
  }
  return result;
}
