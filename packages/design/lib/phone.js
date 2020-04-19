"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _GroupItem = _interopRequireDefault(require("./components/GroupItem"));

var _constants = require("@lzshow/constants");

var _action = require("./store/action");

require("./index.scss");

var _core = require("@lzshow/core");

var _config = require("./config");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Phone = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Phone, _React$Component);

  var _super = _createSuper(Phone);

  function Phone(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Phone);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  (0, _createClass2["default"])(Phone, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 担心观众老爷等不及，预制一个场景
      // const data = get1024Data();
      var _this$props = this.props,
          dispatch = _this$props.dispatch,
          id = _this$props.id;
      var data = (0, _config.getComponetData)(id);
      dispatch((0, _action.initStore)(data));
    }
  }, {
    key: "renderComponent",
    value: function renderComponent() {
      var _this$props2 = this.props,
          pages = _this$props2.pages,
          activePage = _this$props2.activePage,
          editList = _this$props2.editList,
          groupList = _this$props2.groupList,
          dispatch = _this$props2.dispatch,
          activeEditKey = _this$props2.activeEditKey;
      var list = pages[activePage];
      return list.map(function (it) {
        var nodeType = editList[it].nodeType;

        if (nodeType === _constants.ITEM_TYPE_SINGLE) {
          var _editList$it = editList[it],
              type = _editList$it.type,
              others = (0, _objectWithoutProperties2["default"])(_editList$it, ["type"]);
          var Component = (0, _core.getComponentEditMap)(type);
          return /*#__PURE__*/_react["default"].createElement(Component, {
            dispatch: dispatch,
            uniqueId: it,
            activeEditKey: activeEditKey,
            activePage: activePage,
            editList: editList,
            groupList: groupList,
            key: it,
            data: others,
            actions: {
              startMove: _action.startMove,
              resetContentHeight: _action.resetContentHeight,
              changeActiveEditKey: _action.changeActiveEditKey,
              addAttrs: _action.addAttrs,
              changeAttrs: _action.changeAttrs,
              emptyAnimate: _action.emptyAnimate
            }
          });
        }

        if (nodeType === _constants.ITEM_TYPE_GROUP) {
          return /*#__PURE__*/_react["default"].createElement(_GroupItem["default"], {
            key: it,
            uniqueId: it,
            list: groupList[it],
            editList: editList
          });
        }

        return null;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          backGroundImage = _this$props3.backGroundImage,
          backMusicUrl = _this$props3.backMusicUrl;
      var style = {
        backgroundImage: "url(".concat(backGroundImage, ")"),
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "home-edit-item-container",
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", null, this.renderComponent()));
    }
  }]);
  return Phone;
}(_react["default"].Component);

var mapStateToProps = function mapStateToProps(store) {
  var state = store.toJS();
  var pages = state.pages,
      activePage = state.activePage,
      editList = state.editList,
      backGroundImage = state.backGroundImage,
      backMusicUrl = state.backMusicUrl,
      groupList = state.groupList,
      activeEditKey = state.activeEditKey;
  var result = {
    pages: pages,
    activePage: activePage,
    editList: editList,
    backGroundImage: backGroundImage,
    backMusicUrl: backMusicUrl,
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