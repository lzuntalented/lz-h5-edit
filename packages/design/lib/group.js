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

var _Input = _interopRequireDefault(require("../../components/Input"));

var _Picture = _interopRequireDefault(require("../../components/Picture"));

var _constants = require("../../core/constants");

require("./index.scss");

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
    key: "renderComponent",
    value: function renderComponent() {
      var _this$props = this.props,
          pages = _this$props.pages,
          activePage = _this$props.activePage,
          editList = _this$props.editList,
          groupList = _this$props.groupList;
      var list = pages[activePage];
      return list.map(function (it) {
        if (editList[it]) {
          var _editList$it = editList[it],
              type = _editList$it.type,
              others = (0, _objectWithoutProperties2["default"])(_editList$it, ["type"]);

          switch (type) {
            case _constants.COMPONENT_TYPE_TEXT:
              return /*#__PURE__*/_react["default"].createElement(_Input["default"], {
                uniqueId: it,
                key: it,
                data: others
              });

            case _constants.COMPONENT_TYPE_PICTURE:
              return /*#__PURE__*/_react["default"].createElement(_Picture["default"], {
                uniqueId: it,
                key: it,
                data: others
              });

            default:
              break;
          }
        }

        return /*#__PURE__*/_react["default"].createElement("div", null);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          backGroundImage = _this$props2.backGroundImage,
          backMusicUrl = _this$props2.backMusicUrl;
      var style = {
        backgroundImage: "url(".concat(backGroundImage, ")"),
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "home-edit-item-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: style
      }, this.renderComponent()));
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
      groupList = state.groupList;
  var result = {
    pages: pages,
    activePage: activePage,
    editList: editList,
    backGroundImage: backGroundImage,
    backMusicUrl: backMusicUrl,
    groupList: groupList
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