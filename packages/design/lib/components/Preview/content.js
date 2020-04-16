"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/input/style/css");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/modal/style/css");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/notification/style/css");

var _notification2 = _interopRequireDefault(require("antd/lib/notification"));

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

require("./index.scss");

var _utils = require("../../utils");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Header = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Header);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onTitleChange", function (e) {
      var target = e.target;

      _this.setState({
        title: target.value
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onPublish", function () {
      var title = _this.state.title;
      var state = _this.props.state;

      if (title.trim() === '') {
        _notification2["default"].error({
          message: '请先输入作品标题'
        });

        return;
      }

      var content = (0, _utils.deleteUnUseObject)(state);

      if (!content) {
        _modal["default"].error({
          title: '发布失败',
          content: '请在场景中添加物料，以丰富内容'
        });

        return;
      } // // 远程存储用户预览模板


      save({
        content: state,
        title: title
      }).then(function (id) {
        _modal["default"].success({
          content: '恭喜，发布成功！',
          onOk: function onOk() {
            window.open("#/preview/".concat(id), '_blank');
          }
        });
      })["catch"](function () {
        _modal["default"].error({
          title: '发布失败'
        });
      });
    });
    _this.state = {
      title: ''
    };
    return _this;
  }

  (0, _createClass2["default"])(Header, [{
    key: "render",
    value: function render() {
      var title = this.state.title;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "m-b-8"
      }, "\u6807\u9898"), /*#__PURE__*/_react["default"].createElement(_input["default"], {
        value: title,
        onChange: this.onTitleChange,
        className: "m-b-8",
        placeholder: "\u8BF7\u8F93\u5165\u6807\u9898"
      }), /*#__PURE__*/_react["default"].createElement(_button["default"], {
        type: "primary",
        onClick: this.onPublish
      }, "\u53D1\u5E03"));
    }
  }]);
  return Header;
}(_react["default"].Component);

(0, _defineProperty2["default"])(Header, "propTypes", {
  state: _propTypes["default"].object.isRequired
});

var mapStateToProps = function mapStateToProps(store) {
  var state = store.toJS();
  var result = {
    state: JSON.stringify(state)
  };
  return result;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);

exports["default"] = _default;