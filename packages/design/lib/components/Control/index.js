"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _constants = require("../../core/constants");

var _action = require("../../store/action");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Phone = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Phone, _React$Component);

  var _super = _createSuper(Phone);

  function Phone(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Phone);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onScale", function (flag, uniqueId) {
      var group = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return function (e) {
        var _this$props = _this.props,
            dispatch = _this$props.dispatch,
            activeEditKey = _this$props.activeEditKey,
            editList = _this$props.editList,
            groupList = _this$props.groupList; // if (activeEditKey.length === 0) {
        //   e.preventDefault();
        //   dispatch(changeActiveEditKey(uniqueId));
        //   return;
        // }

        var elem = e.target;
        var key = elem.getAttribute('data-key'); // const rect = {};

        var rectMap = {};
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

        if (key) {
          var obj = {
            key: key,
            rectMap: rectMap
          };

          if (key === _constants.POINT_ROTATE) {
            obj.boundRect = e.currentTarget.getBoundingClientRect(); // dispatch(saveMoveTagBoundingClientRect(e.currentTarget.getBoundingClientRect()));
          }

          dispatch((0, _action.startMove)(obj));
        } else {
          dispatch((0, _action.startMove)({
            key: flag,
            rectMap: rectMap
          }));
        }
      };
    });
    _this.state = {};
    return _this;
  }

  (0, _createClass2["default"])(Phone, [{
    key: "getGroupRect",
    value: function getGroupRect(group) {
      var editList = this.props.editList;
      var rect = {};
      var left = 0;
      var top = 0;
      var width = 0;
      var height = 0;
      group.forEach(function (uniqueId, index) {
        var item = editList[uniqueId];
        var itemRect = item.rect;

        if (index === 0) {
          /* eslint-disable-next-line prefer-destructuring */
          left = itemRect.left;
          /* eslint-disable-next-line prefer-destructuring */

          top = itemRect.top;
          /* eslint-disable-next-line prefer-destructuring */

          width = itemRect.width + left;
          /* eslint-disable-next-line prefer-destructuring */

          height = itemRect.height + top;
        } else {
          left = Math.min(left, itemRect.left);
          top = Math.min(top, itemRect.top);
          width = Math.max(width + left, itemRect.width + itemRect.left);
          height = Math.max(height + top, itemRect.height + itemRect.top);
        }
      });
      rect.left = left;
      rect.top = top;
      rect.width = width - left;
      rect.height = height - top;
      return rect;
    }
  }, {
    key: "renderLine",
    value: function renderLine(it) {
      var uniqueId = it.uniqueId,
          data = it.data,
          group = it.group,
          type = it.type,
          _it$origin = it.origin,
          origin = _it$origin === void 0 ? {} : _it$origin;
      var rect = data.rect;
      var top = rect.top,
          left = rect.left,
          width = rect.width,
          height = rect.height,
          rotate = rect.rotate;
      return /*#__PURE__*/_react["default"].createElement("ul", {
        className: "ctrl-container",
        key: uniqueId,
        onMouseDown: this.onScale(_constants.ALL_ITEM, uniqueId, group),
        style: {
          position: 'absolute',
          width: width,
          left: left,
          top: top,
          height: height,
          transform: "rotate(".concat(rotate, "deg)"),
          transformOrigin: "".concat(origin.x, "px ").concat(origin.y, "px")
        }
      }, /*#__PURE__*/_react["default"].createElement("li", {
        className: "line t"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "point tc",
        "data-key": _constants.POINT_TOP_CENTER
      })), /*#__PURE__*/_react["default"].createElement("li", {
        className: "line b"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "point bc",
        "data-key": _constants.POINT_BOTTOM_CENTER
      })), /*#__PURE__*/_react["default"].createElement("li", {
        className: "line l"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "point lc",
        "data-key": _constants.POINT_LEFT_CENTER
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: "point lt",
        "data-key": _constants.POINT_LEFT_TOP
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: "point lb",
        "data-key": _constants.POINT_LEFT_BOTTOM
      })), /*#__PURE__*/_react["default"].createElement("li", {
        className: "line r"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "point rc",
        "data-key": _constants.POINT_RIGHT_CENTER
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: "point rt",
        "data-key": _constants.POINT_RIGHT_TOP
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: "point rb",
        "data-key": _constants.POINT_RIGHT_BOTTOM
      })), /*#__PURE__*/_react["default"].createElement("li", {
        className: "line link-rotate"
      }), /*#__PURE__*/_react["default"].createElement("li", {
        className: "point rotate",
        "data-key": _constants.POINT_ROTATE
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          editList = _this$props2.editList,
          groupList = _this$props2.groupList,
          activeEditKey = _this$props2.activeEditKey;
      var items = [];
      var belongs = {};
      activeEditKey.forEach(function (it) {
        var group = groupList[it];

        if (group) {
          items.push({
            uniqueId: it,
            data: editList[it]
          });
        } else {
          var _editList$it = editList[it],
              rect = _editList$it.rect,
              belong = _editList$it.belong;
          var rectData = Object.assign({}, rect);
          var obj = {}; // 当前为组内元素

          if (belong) {
            // const { rect: groupRect } = editList[belong];
            // rectData.left += groupRect.left;
            // rectData.top += groupRect.top;
            // rectData.rotate += groupRect.rotate;
            if (!belongs[belong]) {
              belongs[belong] = [];
              items.push({
                uniqueId: belong,
                data: editList[belong],
                type: 'no-event'
              });
            }

            belongs[belong].push({
              uniqueId: it,
              data: editList[it]
            });
          } else {
            items.push({
              uniqueId: it,
              data: editList[it]
            });
          }
        }
      });
      items.forEach(function (it) {
        var item = belongs[it.uniqueId];

        if (item) {
          it.children = item;
        }
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "home-control-container"
      }, items.map(function (it) {
        var uniqueId = it.uniqueId,
            data = it.data,
            group = it.group,
            type = it.type,
            _it$children = it.children,
            children = _it$children === void 0 ? [] : _it$children;
        var rect = data.rect;
        var top = rect.top,
            left = rect.left,
            width = rect.width,
            height = rect.height,
            rotate = rect.rotate;

        if (type === 'no-event') {
          return /*#__PURE__*/_react["default"].createElement("ul", {
            className: "ctrl-container",
            key: uniqueId,
            onMouseDown: _this2.onScale(_constants.ALL_ITEM, uniqueId, group),
            style: {
              position: 'absolute',
              width: width,
              left: left,
              top: top,
              height: height,
              transform: "rotate(".concat(rotate, "deg)")
            }
          }, /*#__PURE__*/_react["default"].createElement("li", {
            className: "line t"
          }), /*#__PURE__*/_react["default"].createElement("li", {
            className: "line b"
          }), /*#__PURE__*/_react["default"].createElement("li", {
            className: "line l"
          }), /*#__PURE__*/_react["default"].createElement("li", {
            className: "line r"
          }), children.map(function (that) {
            return _this2.renderLine(that);
          }));
        }

        return _this2.renderLine(it);
      }));
    }
  }]);
  return Phone;
}(_react["default"].Component);

(0, _defineProperty2["default"])(Phone, "propTypes", {
  dispatch: _propTypes["default"].func.isRequired,
  editList: _propTypes["default"].object.isRequired,
  groupList: _propTypes["default"].object.isRequired,
  activeEditKey: _propTypes["default"].array.isRequired
});

var mapStateToProps = function mapStateToProps(store) {
  var state = store.toJS();
  var editList = state.editList,
      groupList = state.groupList,
      activeEditKey = state.activeEditKey;
  var result = {
    editList: editList,
    groupList: groupList,
    activeEditKey: activeEditKey
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