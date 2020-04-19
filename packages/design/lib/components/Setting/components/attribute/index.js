"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRender = registerRender;
exports["default"] = void 0;

require("antd/lib/collapse/style/css");

var _collapse = _interopRequireDefault(require("antd/lib/collapse"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

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

var _constants = require("@lzshow/constants");

var _utils = require("@lzshow/utils");

var _Select = _interopRequireDefault(require("./components/Select"));

var _Color = _interopRequireDefault(require("./components/Color"));

var _SliderInput = _interopRequireDefault(require("./components/SliderInput"));

var _Input = _interopRequireDefault(require("./components/Input"));

var _Textarea = _interopRequireDefault(require("./components/Textarea"));

var _ContentEditDiv = _interopRequireDefault(require("./components/ContentEditDiv"));

var _TwoInput = _interopRequireDefault(require("./components/TwoInput"));

var _Picture = _interopRequireDefault(require("./components/Picture"));

var _action = require("../../../../store/action");

var _renderMap;

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var renderMap = (_renderMap = {}, (0, _defineProperty2["default"])(_renderMap, _constants.STYLE_RENDER_TYPE_SELECT, _Select["default"]), (0, _defineProperty2["default"])(_renderMap, _constants.STYLE_RENDER_TYPE_COLOR, _Color["default"]), (0, _defineProperty2["default"])(_renderMap, _constants.STYLE_RENDER_TYPE_SLIDER_INPUT, _SliderInput["default"]), (0, _defineProperty2["default"])(_renderMap, _constants.STYLE_RENDER_TYPE_INPUT, _Input["default"]), (0, _defineProperty2["default"])(_renderMap, _constants.STYLE_RENDER_TYPE_TEXTAREA, _Textarea["default"]), (0, _defineProperty2["default"])(_renderMap, _constants.STYLE_RENDER_TYPE_CONTENT_EDIT_DIV, _ContentEditDiv["default"]), (0, _defineProperty2["default"])(_renderMap, _constants.STYLE_RENDER_TYPE_TWO_INPUT, _TwoInput["default"]), (0, _defineProperty2["default"])(_renderMap, _constants.STYLE_RENDER_TYPE_PICTURE, _Picture["default"]), _renderMap);

function registerRender(key, Comp) {
  renderMap[key] = Comp;
}

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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function (obj) {
      return function (value) {
        var _this$props = _this.props,
            dispatch = _this$props.dispatch,
            activeEditKey = _this$props.activeEditKey;
        var valueType = obj.valueType,
            key = obj.key;
        var v = value;

        if (valueType === _constants.STYLE_VALUE_TYPE_NUMBER) {
          v = +value;
        } // 多个属性设置


        if (Array.isArray(key)) {
          if (!(0, _utils.isObject)(v)) {
            console.error('array key should has object value');
            return;
          }

          key.forEach(function (k) {
            // 检测key是否是对象
            if ((0, _utils.isObject)(k)) {
              // 该对象表示字段类型为数字型
              if (k.valueType === _constants.STYLE_VALUE_TYPE_NUMBER) {
                if (v[k.key]) {
                  v[k.key] = +v[k.key];
                }
              }
            }
          });
          dispatch((0, _action.changeAttrs)(v, activeEditKey));
        } else {
          dispatch((0, _action.changeAttrs)((0, _defineProperty2["default"])({}, key, v), activeEditKey));
        }
      };
    });
    return _this;
  }

  (0, _createClass2["default"])(Attribute, [{
    key: "renderItem",
    value: function renderItem(it, attrs, index) {
      var dispatch = this.props.dispatch;
      var renderType = it.renderType,
          valueType = it.valueType,
          props = it.props,
          key = it.key,
          others = (0, _objectWithoutProperties2["default"])(it, ["renderType", "valueType", "props", "key"]);
      var Comp = renderType;

      if ((0, _utils.isString)(renderType)) {
        Comp = renderMap[renderType];
      }

      var data = attrs;

      if ((0, _utils.isString)(key)) {
        data = attrs[key];
      }

      return Comp ? /*#__PURE__*/_react["default"].createElement(Comp, (0, _extends2["default"])({
        dispatch: dispatch,
        key: index,
        keys: key,
        data: data,
        attrs: props
      }, others, {
        onChange: this.onChange(it)
      })) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          activeEditKey = _this$props2.activeEditKey,
          styleConfig = _this$props2.styleConfig;
      if (!activeEditKey || activeEditKey.length < 0) return /*#__PURE__*/_react["default"].createElement("div", null, "no style");
      var attrs = this.props.attrs;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "component-text-style-container"
      }, styleConfig.map(function (it, index) {
        var renderType = it.renderType,
            children = it.children,
            props = it.props,
            label = it.label;

        if (renderType === _constants.STYLE_RENDER_TYPE_COLLAPSE) {
          return /*#__PURE__*/_react["default"].createElement(_collapse["default"], {
            key: index,
            defaultActiveKey: props.defaultOpen ? '1' : '',
            className: "m-t-8 m-b-8"
          }, /*#__PURE__*/_react["default"].createElement(_collapse["default"].Panel, {
            header: label,
            key: "1"
          }, children.map(function (item, idx) {
            return _this2.renderItem(item, attrs, "".concat(index, "-").concat(idx));
          })));
        }

        return _this2.renderItem(it, attrs, index);
      }));
    }
  }]);
  return Attribute;
}(_react["default"].Component);

(0, _defineProperty2["default"])(Attribute, "propTypes", {
  dispatch: _propTypes["default"].func.isRequired
});

var mapStateToProps = function mapStateToProps(store) {
  var state = store.toJS();
  var editList = state.editList,
      activeEditKey = state.activeEditKey;
  var result = {
    activeEditKey: activeEditKey
  };

  if (activeEditKey && activeEditKey.length === 1) {
    var item = editList[activeEditKey[0]];
    if (item) return Object.assign(result, item);
  }

  return result;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Attribute);

exports["default"] = _default;