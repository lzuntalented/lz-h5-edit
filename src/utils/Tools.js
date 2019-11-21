import {
  COMPONENT_TYPE_PICTURE, COMPONENT_TYPE_ART_INPUT, COMPONENT_TYPE_INPUT, COMPONENT_TYPE_BUTTON,
  COMPONENT_TYPE_MAP, COMPONENT_TYPE_QQ_VIDEO,
} from '../core/constants';

function isType(type) {
  return obj => Object.prototype.toString.call(obj) === `[object ${type}]`;
}

function isTypeOf(type) {
  return obj => typeof (obj) === type;
}
export const isFunction = isType('Function');
export const isUndefined = isTypeOf('Undefined');
export const isArray = Array.isArray || isType('Array');
export const isObject = isType('Object');
export const isString = isTypeOf('string');

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


export function getDefaultAttrs(config) {
  const result = {};
  config.forEach(({ key, initValue }) => {
    if (isString(key)) {
      result[key] = initValue;
    } else {
      Object.assign(result, initValue);
    }
  });
  return result;
}
