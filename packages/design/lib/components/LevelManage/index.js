"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/icon/style/css");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _reactSortableHoc = require("react-sortable-hoc");

var _arrayMove = _interopRequireDefault(require("array-move"));

var _hotkeysJs = _interopRequireDefault(require("hotkeys-js"));

var _Item = _interopRequireDefault(require("./components/Item"));

require("./index.scss");

var _action = require("../../store/action");

var _constants = require("../../core/constants");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SortableList = (0, _reactSortableHoc.SortableContainer)(function (_ref) {
  var items = _ref.items,
      onItemClick = _ref.onItemClick,
      onItemCopyClick = _ref.onItemCopyClick,
      onChangeItemName = _ref.onChangeItemName,
      onSortEndCB = _ref.onSortEndCB;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sort-container"
  }, items.map(function (value, index) {
    var children = value.children,
        key = value.key;
    var defaultProps = {
      key: key,
      index: index,
      value: value,
      onItemCopyClick: onItemCopyClick,
      onItemClick: onItemClick,
      onChangeItemName: onChangeItemName
    };

    if (children) {
      return /*#__PURE__*/_react["default"].createElement(_Item["default"], (0, _extends2["default"])({
        group: true
      }, defaultProps), /*#__PURE__*/_react["default"].createElement(SortableList, {
        onSortEnd: onSortEndCB(children, key),
        items: children,
        onItemClick: onItemClick,
        onItemCopyClick: onItemCopyClick,
        onChangeItemName: onChangeItemName
      }));
    }

    return /*#__PURE__*/_react["default"].createElement(_Item["default"], defaultProps);
  }));
});
var multiple = false;

var LevelManage = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LevelManage, _React$Component);

  var _super = _createSuper(LevelManage);

  function LevelManage() {
    var _this;

    (0, _classCallCheck2["default"])(this, LevelManage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSortEnd", function (list, key) {
      return function (obj) {
        var oldIndex = obj.oldIndex,
            newIndex = obj.newIndex;
        var _this$props = _this.props,
            dispatch = _this$props.dispatch,
            groupList = _this$props.groupList;

        if (key) {
          var arr = (0, _arrayMove["default"])(groupList[key], oldIndex, newIndex);
          dispatch((0, _action.resortGroupItem)(key, arr));
        } else {
          var pages = (0, _arrayMove["default"])(list, oldIndex, newIndex).map(function (it) {
            return it.key;
          });
          dispatch((0, _action.resortPageItem)(pages));
        }
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onItemClick", function (key) {
      return function () {
        var _this$props2 = _this.props,
            dispatch = _this$props2.dispatch,
            activeEditKey = _this$props2.activeEditKey,
            editList = _this$props2.editList;
        var item = editList[key];
        var obj = activeEditKey.find(function (it) {
          return editList[it].belong || editList[it].nodeType === _constants.ITEM_TYPE_GROUP;
        });

        if (obj || item.belong || item.nodeType === _constants.ITEM_TYPE_GROUP) {
          dispatch((0, _action.changeActiveEditKey)(key));
          return;
        }

        if (multiple) {
          dispatch((0, _action.addActiveEditKey)(key));
        } else {
          dispatch((0, _action.changeActiveEditKey)(key));
        }
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onItemCopyClick", function (key) {
      return function (e) {
        e.stopPropagation();
        var dispatch = _this.props.dispatch;
        dispatch((0, _action.copyItem)(key));
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeItemName", function (key, name) {
      var dispatch = _this.props.dispatch;
      dispatch((0, _action.changeItemName)(key, name));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onGroup", function () {
      var dispatch = _this.props.dispatch;
      dispatch((0, _action.groupActiveEditKeys)());
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onGroupSplit", function () {
      var dispatch = _this.props.dispatch;
      dispatch((0, _action.splitGroupActiveEditKeys)());
    });
    return _this;
  }

  (0, _createClass2["default"])(LevelManage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _hotkeysJs["default"])('*', {
        keyup: true,
        keydown: true
      }, function (event) {
        // Prevent the default refresh event under WINDOWS system
        if (_hotkeysJs["default"].shift) {
          if (event.type === 'keydown') {
            multiple = true;
          } else {
            multiple = false;
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var list = this.props.list;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "component-level-manage-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "top-op"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "op",
        onClick: this.onGroup
      }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
        className: "m-r-4",
        type: "wallet"
      }), "\u7EC4\u5408"), /*#__PURE__*/_react["default"].createElement("span", {
        className: "m-l-16 op",
        onClick: this.onGroupSplit
      }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
        className: "m-r-4",
        type: "disconnect"
      }), "\u62C6\u5206")), /*#__PURE__*/_react["default"].createElement(SortableList, {
        items: list,
        onItemClick: this.onItemClick,
        onItemCopyClick: this.onItemCopyClick,
        onSortEnd: this.onSortEnd(list),
        onSortEndCB: this.onSortEnd,
        onChangeItemName: this.onChangeItemName
      }));
    }
  }]);
  return LevelManage;
}(_react["default"].Component);

(0, _defineProperty2["default"])(LevelManage, "propTypes", {
  dispatch: _propTypes["default"].func.isRequired,
  groupList: _propTypes["default"].object.isRequired,
  activeEditKey: _propTypes["default"].array.isRequired,
  editList: _propTypes["default"].object.isRequired,
  list: _propTypes["default"].array.isRequired
});

var mapStateToProps = function mapStateToProps(store) {
  var state = store.toJS();
  var pages = state.pages,
      activePage = state.activePage,
      editList = state.editList,
      activeEditKey = state.activeEditKey,
      groupList = state.groupList;
  var list = [];
  pages[activePage].forEach(function (it) {
    if (groupList[it]) {
      list.push({
        name: editList[it].name,
        key: it,
        active: activeEditKey.indexOf(it) > -1,
        children: groupList[it].map(function (item) {
          return {
            name: editList[item].name,
            key: item,
            active: activeEditKey.indexOf(item) > -1
          };
        })
      });
    } else {
      list.push({
        name: editList[it].name,
        key: it,
        active: activeEditKey.indexOf(it) > -1
      });
    }
  });
  var result = {
    list: list,
    activeEditKey: activeEditKey,
    editList: editList,
    groupList: groupList
  };
  return result;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LevelManage);

exports["default"] = _default;