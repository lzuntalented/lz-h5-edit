"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@lzshow/core");

var _constants = require("@lzshow/constants");

var _action = require("../../store/action");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var GroupItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(GroupItem, _React$Component);

  var _super = _createSuper(GroupItem);

  function GroupItem(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, GroupItem);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClikItem", function (e) {
      e.stopPropagation();
      var _this$props = _this.props,
          dispatch = _this$props.dispatch,
          uniqueId = _this$props.uniqueId;
      dispatch((0, _action.changeActiveEditKey)(uniqueId));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onStartMove", function (e) {
      // 如果资源触发此事件，禁用事件
      if (e.cancelMove) {
        delete e.cancelMove;
        return;
      }

      var _this$props2 = _this.props,
          dispatch = _this$props2.dispatch,
          list = _this$props2.list,
          editList = _this$props2.editList,
          uniqueId = _this$props2.uniqueId,
          activeEditKey = _this$props2.activeEditKey,
          groupList = _this$props2.groupList; // 检测激活态是否包含此唯一标识

      if (activeEditKey.indexOf(uniqueId) === -1) return; // const { rect } = editList[uniqueId];

      var rectMap = {}; // list.forEach((it) => { rectMap[it] = Object.assign({}, editList[it].rect); });

      var groupKeys = {};
      activeEditKey.forEach(function (it) {
        var item = editList[it];
        var rect = item.rect,
            belong = item.belong,
            nodeType = item.nodeType;

        if (nodeType === _constants.ITEM_TYPE_GROUP) {
          groupKeys[it] = Object.assign({}, rect);
        } else if (belong) {
          groupKeys[belong] = Object.assign({}, editList[belong].rect);
        } else {
          rectMap[it] = Object.assign({}, rect);
        }
      });
      Object.keys(groupKeys).forEach(function (k) {
        var groupItem = editList[k];
        var itemList = groupList[k];
        itemList.forEach(function (itemKey) {
          var item = editList[itemKey];
          var rect = item.rect;
          rectMap[itemKey] = Object.assign({}, rect, {
            top: groupItem.rect.top + rect.top,
            left: groupItem.rect.left + rect.left
          });
        });
      });
      dispatch((0, _action.startMove)({
        key: _constants.ALL_ITEM,
        rectMap: rectMap
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setMagicRefs", function (name) {
      return function (r) {
        _this.magicRefs[name] = r;
      };
    });
    _this.magicRefs = {};
    _this.shiftDown = false;
    return _this;
  }

  (0, _createClass2["default"])(GroupItem, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          list = _this$props3.list,
          editList = _this$props3.editList,
          uniqueId = _this$props3.uniqueId;
      var rect = editList[uniqueId].rect;
      var height = rect.height,
          width = rect.width,
          left = rect.left,
          top = rect.top,
          rotate = rect.rotate;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "group-item",
        onClick: this.onClikItem,
        onMouseDown: this.onStartMove,
        style: {
          height: height,
          width: width,
          left: left,
          top: top,
          position: 'absolute',
          transform: "rotate(".concat(rotate, "deg)")
        }
      }, list.map(function (item) {
        var _editList$item = editList[item],
            type = _editList$item.type,
            others = (0, _objectWithoutProperties2["default"])(_editList$item, ["type"]);
        var Comp = (0, _core.getComponentEditMap)(type);
        return /*#__PURE__*/_react["default"].createElement(Comp, {
          uniqueId: item,
          key: item,
          data: others
        });
      }));
    }
  }]);
  return GroupItem;
}(_react["default"].Component);

(0, _defineProperty2["default"])(GroupItem, "propTypes", {
  dispatch: _propTypes["default"].func.isRequired,
  uniqueId: _propTypes["default"].string.isRequired
});

var mapStateToProps = function mapStateToProps(store) {
  var state = store.toJS();
  var activeEditKey = state.activeEditKey,
      groupList = state.groupList;
  return {
    activeEditKey: activeEditKey,
    groupList: groupList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GroupItem);

exports["default"] = _default;