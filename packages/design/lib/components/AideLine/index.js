"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _constants = require("@lzshow/constants");

var _utils = require("@lzshow/utils");

var _utils2 = require("../../utils");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Phone = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Phone, _React$Component);

  var _super = _createSuper(Phone);

  function Phone() {
    (0, _classCallCheck2["default"])(this, Phone);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Phone, [{
    key: "getAideLines",

    /**
     * 获取可绘制辅助线列表
     */
    value: function getAideLines() {
      var currentShowList = this.calcCurrentShowItems();
      var _this$props = this.props,
          editList = _this$props.editList,
          activeEditKey = _this$props.activeEditKey;
      var result = []; //   坐标误差内，显示辅助线

      var wu = 5;
      activeEditKey.forEach(function (key) {
        var it = editList[key];
        var belong = it.belong;
        var rect = Object.assign({}, it.rect);

        if (belong) {
          var groupItem = editList[belong];
          rect.left = groupItem.rect.left + rect.left;
          rect.top = groupItem.rect.top + rect.top;
        }

        currentShowList.forEach(function (_ref) {
          var left = _ref.left,
              top = _ref.top,
              k = _ref.key;

          if (k === belong) {
            return;
          }

          if (Math.abs(rect.left - left) <= wu) {
            //   超出编辑器不绘制
            if (left >= 0 && left <= _utils2.winSize.width) {
              result.push({
                left: left
              });
            }
          }

          if (Math.abs(rect.top - top) <= wu) {
            // 超出编辑器不绘制
            if (top >= 0 && top <= _utils2.winSize.height) {
              result.push({
                top: top
              });
            }
          }
        });
      });
      return result;
    }
    /**
     * 计算当前活动页面中，各元素坐标
     */

  }, {
    key: "calcCurrentShowItems",
    value: function calcCurrentShowItems() {
      var _this$props2 = this.props,
          editList = _this$props2.editList,
          groupList = _this$props2.groupList,
          currentList = _this$props2.currentList,
          activeEditKey = _this$props2.activeEditKey;
      var result = [];
      currentList.forEach(function (key) {
        if (activeEditKey.indexOf(key) > -1) return;
        var item = editList[key];
        var rect = item.rect,
            nodeType = item.nodeType; // 仅绘制顶部和左侧对齐

        result.push({
          key: key,
          left: rect.left,
          top: rect.top
        }); // 组元素，需要把子元素逐个转换成相对编辑器坐标

        if (nodeType === _constants.ITEM_TYPE_GROUP) {
          groupList[key].forEach(function (k) {
            if (activeEditKey.indexOf(k) > -1) return;
            var it = editList[k];
            result.push({
              key: k,
              left: rect.left + it.left,
              top: rect.top + it.top
            });
          });
        }
      });
      return result;
    }
  }, {
    key: "render",
    value: function render() {
      var list = this.getAideLines();
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "home-aideline-container"
      }, list.map(function (_ref2, index) {
        var left = _ref2.left,
            top = _ref2.top;
        return !(0, _utils.isUndefined)(left) ? /*#__PURE__*/_react["default"].createElement("div", {
          key: index,
          className: "aide-left",
          style: {
            left: left
          }
        }) : /*#__PURE__*/_react["default"].createElement("div", {
          key: index,
          className: "aide-top",
          style: {
            top: top
          }
        });
      }));
    }
  }]);
  return Phone;
}(_react["default"].Component);

(0, _defineProperty2["default"])(Phone, "propTypes", {
  editList: _propTypes["default"].object.isRequired,
  groupList: _propTypes["default"].object.isRequired,
  activeEditKey: _propTypes["default"].array.isRequired,
  currentList: _propTypes["default"].array.isRequired
});

var mapStateToProps = function mapStateToProps(store) {
  var state = store.toJS();
  var editList = state.editList,
      groupList = state.groupList,
      activeEditKey = state.activeEditKey,
      pages = state.pages,
      activePage = state.activePage;
  var result = {
    editList: editList,
    groupList: groupList,
    activeEditKey: activeEditKey,
    currentList: pages[activePage]
  };
  return result;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Phone);

exports["default"] = _default;