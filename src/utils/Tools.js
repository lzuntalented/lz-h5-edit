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
