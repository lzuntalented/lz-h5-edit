
function isType(type) {
  return obj => Object.prototype.toString.call(obj) === `[object ${type}]`;
}

function isTypeOf(type) {
  // eslint-disable-next-line valid-typeof
  return obj => typeof (obj) === type;
}

export const isFunction = isType('Function');
export const isUndefined = isTypeOf('Undefined');
export const isArray = Array.isArray || isType('Array');
export const isObject = isType('Object');
export const isString = isTypeOf('string');
