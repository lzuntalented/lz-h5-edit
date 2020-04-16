"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

// 最大保存历史数
var HISTORY_MAX_LEN = 20;

var HistoryStore = /*#__PURE__*/function () {
  function HistoryStore() {
    (0, _classCallCheck2["default"])(this, HistoryStore);
    (0, _defineProperty2["default"])(this, "quene", []);
    (0, _defineProperty2["default"])(this, "queneIndex", -1);
  }

  (0, _createClass2["default"])(HistoryStore, [{
    key: "push",
    value: function push(obj) {
      if (this.queneIndex !== this.quene.length - 1) {
        // 当前指针后面的操作全都不要了
        this.quene.splice(this.queneIndex + 1);
      }

      this.quene.push(obj);

      if (this.quene.length >= HISTORY_MAX_LEN) {
        this.pop();
      }

      this.queneIndex = this.quene.length - 1;
    }
  }, {
    key: "pop",
    value: function pop() {
      this.quene.shift();
    } // 重做

  }, {
    key: "redo",
    value: function redo() {
      if (this.queneIndex >= this.quene.length) {
        return false;
      }

      if (this.queneIndex === -1) {
        this.queneIndex += 1;
      }

      this.queneIndex += 1;

      if (this.queneIndex >= this.quene.length) {
        return false;
      }

      return this.quene[this.queneIndex];
    } // 撤回

  }, {
    key: "undo",
    value: function undo() {
      if (this.queneIndex <= -1) {
        return false;
      }

      if (this.queneIndex === this.quene.length) {
        this.queneIndex -= 1;
      }

      this.queneIndex -= 1;

      if (this.queneIndex <= -1) {
        return false;
      }

      return this.quene[this.queneIndex];
    }
  }]);
  return HistoryStore;
}();

var _default = new HistoryStore();

exports["default"] = _default;