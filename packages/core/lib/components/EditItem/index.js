"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("@lzshow/constants");

var _PreviewAnimation = _interopRequireDefault(require("../PreviewAnimation"));

require("./index.scss");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var refNames = {
  content: 'content'
}; // let shiftDown = false;
// hotkeys('a', (event) => {
//   const { type } = event;
//   if (type === 'keydown') {
//     shiftDown = true;
//   } else {
//     shiftDown = false;
//   }
// });

function _default(Component) {
  // 唯一id
  // const uniqueId = createId();
  var Layout = /*#__PURE__*/function (_React$Component) {
    (0, _inherits2["default"])(Layout, _React$Component);

    var _super = _createSuper(Layout);

    function Layout(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, Layout);
      _this = _super.call(this, props);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClikItem", function (e) {
        e.stopPropagation();
        var _this$props = _this.props,
            dispatch = _this$props.dispatch,
            uniqueId = _this$props.uniqueId;
        var changeActiveEditKey = _this.actions.changeActiveEditKey; // 暂不提供多选功能
        // if (shiftDown) {
        //   dispatch(addActiveEditKey(uniqueId));
        // } else {

        dispatch(changeActiveEditKey(uniqueId)); // }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onStartMove", function (e) {
        var startMove = _this.actions.startMove; // e.preventDefault();

        var _this$props2 = _this.props,
            dispatch = _this$props2.dispatch,
            activeEditKey = _this$props2.activeEditKey,
            uniqueId = _this$props2.uniqueId,
            editList = _this$props2.editList,
            groupList = _this$props2.groupList;
        if (activeEditKey.indexOf(uniqueId) === -1) return;
        e.cancelMove = true;
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
        dispatch(startMove({
          key: _constants.ALL_ITEM,
          rectMap: rectMap
        }));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "resetHeight", function (h) {
        var resetContentHeight = _this.actions.resetContentHeight;
        var _this$props3 = _this.props,
            dispatch = _this$props3.dispatch,
            uniqueId = _this$props3.uniqueId;
        var elem = _this.magicRefs[refNames.content];

        if (h) {
          dispatch(resetContentHeight({
            height: h,
            key: uniqueId
          }));
        } else if (elem) {
          var height = elem.clientHeight;
          dispatch(resetContentHeight({
            height: height,
            key: uniqueId
          }));
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setMagicRefs", function (name) {
        return function (r) {
          _this.magicRefs[name] = r;
        };
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "registerAttrs", function (attrs) {
        var addAttrs = _this.actions.addAttrs;
        var _this$props4 = _this.props,
            dispatch = _this$props4.dispatch,
            uniqueId = _this$props4.uniqueId,
            data = _this$props4.data;

        if (Object.keys(data.attrs).length === 0) {
          dispatch(addAttrs(attrs, uniqueId));
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setAttribute", function (attrs) {
        var changeAttrs = _this.actions.changeAttrs;
        var _this$props5 = _this.props,
            dispatch = _this$props5.dispatch,
            uniqueId = _this$props5.uniqueId;
        dispatch(changeAttrs(attrs, uniqueId));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onKeyUp", function () {
        var dispatch = _this.props.dispatch;
        console.log(_this.shiftDown, 'onKeyUp'); // dispatch(removeItem());

        _this.shiftDown = false;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onKeyDown", function () {
        var dispatch = _this.props.dispatch;
        console.log(_this.shiftDown, 'onKeyDown'); // dispatch(removeItem());

        _this.shiftDown = true;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "emptyAnimates", function () {
        var emptyAnimate = _this.actions.emptyAnimate;
        var dispatch = _this.props.dispatch;
        dispatch(emptyAnimate());
      });
      var actions = props.actions;
      _this.magicRefs = {};
      _this.shiftDown = false;
      _this.actions = actions;
      return _this;
    }

    (0, _createClass2["default"])(Layout, [{
      key: "componentDidMount",
      value: function componentDidMount() {}
    }, {
      key: "render",
      value: function render() {
        var data = this.props.data;
        var rect = data.rect,
            attrs = data.attrs,
            _data$border = data.border,
            border = _data$border === void 0 ? {} : _data$border,
            _data$previewAnimates = data.previewAnimates,
            previewAnimates = _data$previewAnimates === void 0 ? [] : _data$previewAnimates;
        var top = rect.top,
            left = rect.left,
            width = rect.width,
            height = rect.height,
            rotate = rect.rotate; // 内容区样式

        var contentCls = 'content-hide-container';
        var animateStyle = {
          borderStyle: border.style,
          borderWidth: border.width,
          borderColor: border.color,
          borderRadius: border.radius
        };
        return /*#__PURE__*/_react["default"].createElement("div", {
          onMouseDown: this.onStartMove,
          onClick: this.onClikItem,
          className: "edit-item",
          style: {
            width: width,
            left: left,
            top: top,
            height: height,
            transform: "rotate(".concat(rotate, "deg)")
          }
        }, /*#__PURE__*/_react["default"].createElement(_PreviewAnimation["default"], {
          list: previewAnimates,
          className: contentCls,
          style: animateStyle,
          emptyAnimates: this.emptyAnimates
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "content-container",
          ref: this.setMagicRefs(refNames.content),
          style: {
            height: height
          }
        }, /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({
          resetHeight: this.resetHeight,
          registerAttrs: this.registerAttrs,
          setAttribute: this.setAttribute,
          defaultAttrs: this.defaultAttrs
        }, attrs)))));
      }
    }]);
    return Layout;
  }(_react["default"].Component);

  (0, _defineProperty2["default"])(Layout, "propTypes", {
    dispatch: _propTypes["default"].func.isRequired,
    data: _propTypes["default"].object.isRequired,
    uniqueId: _propTypes["default"].string.isRequired,
    activeEditKey: _propTypes["default"].array.isRequired,
    editList: _propTypes["default"].object.isRequired,
    groupList: _propTypes["default"].object.isRequired,
    actions: _propTypes["default"].object.isRequired
  });
  return Layout;
}