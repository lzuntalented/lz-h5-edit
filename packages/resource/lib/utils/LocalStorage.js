"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @by lz
 *
 * 支持过期时间的缓存操作工具类
 *
 * 使用方法：
 * const mLzLocalStorage = new LzLocalStorage('lz');
 *
 * mLzLocalStorage.set('name', 'lz', -1);
 * mLzLocalStorage.get('name'); // 输出lz 不会过期
 *
 * mLzLocalStorage.set('name', 'lz', 3 * 1000);
 * mLzLocalStorage.get('name'); // 3秒内容可以取到lz, 3秒过后获取，取不到值，
 */
// 缓存方式
var _window = window,
    localStorage = _window.localStorage;
/**
 * 设置缓存
 * @param {String} key 键
 * @param {*} value 值
 */

function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
/**
 * 获取缓存
 * @param {String} key 键
 * @returns {*|null}
 */


function getItem(key) {
  var result = localStorage.getItem(key);

  if (result) {
    return JSON.parse(result);
  }

  return null;
}
/**
 * 移除缓存
 * @param key
 */


function removeItem(key) {
  localStorage.removeItem(key);
}
/**
 * 获取当前时间戳（毫秒）
 * @returns {number}
 */


function getNow() {
  return Date.parse(new Date());
} // 缓存表前缀


var mapKey = 'lz-map-';
/**
 * localStorage 操作类
 * 支持过期时间
 */

var LzLocalStorage = /*#__PURE__*/function () {
  /**
     * @param {String} namespace 命名空间
     */
  function LzLocalStorage() {
    var namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    (0, _classCallCheck2["default"])(this, LzLocalStorage);
    // 缓存命名空间
    this.namespace = namespace; // 缓存表key

    this.mapKey = mapKey + this.namespace; // 缓存表

    this.map = getItem(this.mapKey) || {};
  }
  /**
     * 设置缓存
     * @param {String} key 键
     * @param {*} value 值
     * @param {Number} expires 过期时间（毫秒） -1不过期，
     */


  (0, _createClass2["default"])(LzLocalStorage, [{
    key: "set",
    value: function set(key, value) {
      var expires = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      var k = this.getReallyKey(key);
      var obj = {
        expires: expires,
        time: getNow()
      };
      setItem(k, value);
      this.map[key] = obj;
      setItem(this.mapKey, this.map);
    }
    /**
       * 获取真实的缓存键
       * @param {String} key 键
       * @returns {string}
       */

  }, {
    key: "getReallyKey",
    value: function getReallyKey(key) {
      return "".concat(this.namespace, "-").concat(key);
    }
    /**
       * 获取缓存内容
       * @param {String} key 键
       * @param {*} defaultValue 默认返回值
       * @returns {*} 若未取到则返回defaultValue
       */

  }, {
    key: "get",
    value: function get(key, defaultValue) {
      var k = this.getReallyKey(key);
      var obj = this.map[key]; // 缓存存在

      if (obj) {
        // 缓存无过期时间
        if (obj.expires > -1) {
          // 在缓存时间内
          if (getNow() - obj.time <= obj.expires) {
            return getItem(k) || defaultValue;
          }

          this["delete"](key);
        } else {
          return getItem(k) || defaultValue;
        }
      }

      return defaultValue;
    }
    /**
       * 获取命名空间下所有缓存
       * @returns {Object}
       */

  }, {
    key: "getAll",
    value: function getAll() {
      var result = {};

      for (var i in this.map) {
        result[i] = this.get(i);
      }

      return result;
    }
    /**
       * 删除单个缓存
       * @param {String} key 键
       */

  }, {
    key: "delete",
    value: function _delete(key) {
      var k = this.getReallyKey(key);
      delete this.map[key]; // 重置缓存表

      setItem(this.mapKey, this.map); // 删除缓存

      removeItem(k);
    }
    /**
       * 删除所有命名空间缓存
       */

  }, {
    key: "deleteAll",
    value: function deleteAll() {
      for (var i in this.map) {
        this["delete"](i);
      }
    }
  }]);
  return LzLocalStorage;
}();

exports["default"] = LzLocalStorage;