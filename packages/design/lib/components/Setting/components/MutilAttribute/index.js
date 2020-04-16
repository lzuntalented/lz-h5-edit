"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

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

var _action = require("../../../../store/action");

var _config = require("./config");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var alignOptions = (0, _config.getAlignConfig)();

var Attribute = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Attribute, _React$Component);

  var _super = _createSuper(Attribute);

  function Attribute() {
    var _this;

    (0, _classCallCheck2["default"])(this, Attribute);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClickAlign", function (actionKey) {
      return function () {
        var dispatch = _this.props.dispatch;
        dispatch((0, _action.changeMultiActiveAlign)(actionKey));
      };
    });
    return _this;
  }

  (0, _createClass2["default"])(Attribute, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeEditKey = this.props.activeEditKey;
      if (!activeEditKey || activeEditKey.length < 0) return /*#__PURE__*/_react["default"].createElement("div", null, "no style");
      return /*#__PURE__*/_react["default"].createElement(_row["default"], {
        align: "middle",
        type: "flex",
        gutter: 6,
        justify: "space-around"
      }, alignOptions.map(function (it) {
        return /*#__PURE__*/_react["default"].createElement(_col["default"], {
          key: it.key
        }, /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
          placement: "top",
          title: it.tip
        }, /*#__PURE__*/_react["default"].createElement("i", {
          className: "cursor-pointer iconfont ".concat(it.icon),
          onClick: _this2.onClickAlign(it.key)
        })));
      }));
    }
  }]);
  return Attribute;
}(_react["default"].Component);

(0, _defineProperty2["default"])(Attribute, "propTypes", {
  dispatch: _propTypes["default"].func.isRequired,
  activeEditKey: _propTypes["default"].array.isRequired
});

var mapStateToProps = function mapStateToProps(store) {
  var state = store.toJS();
  var activeEditKey = state.activeEditKey;
  var result = {
    activeEditKey: activeEditKey
  };
  return result;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Attribute);

exports["default"] = _default;