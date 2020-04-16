"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/tabs/style/css");

var _tabs = _interopRequireDefault(require("antd/lib/tabs"));

require("antd/lib/collapse/style/css");

var _collapse = _interopRequireDefault(require("antd/lib/collapse"));

require("antd/lib/input/style/css");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/icon/style/css");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/lib/select/style/css");

var _select = _interopRequireDefault(require("antd/lib/select"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _config = _interopRequireDefault(require("./config"));

var _action = require("../../../../store/action");

var _constants = require("../../../../core/constants");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var opts = (0, _config["default"])();
var Option = _select["default"].Option,
    OptGroup = _select["default"].OptGroup;

var Animation = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Animation, _React$Component);

  var _super = _createSuper(Animation);

  function Animation() {
    var _this;

    (0, _classCallCheck2["default"])(this, Animation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      showAnimateName: false,
      changeAnimateIndex: -1
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeAnimateName", function (name) {
      return function () {
        var changeAnimateIndex = _this.state.changeAnimateIndex;
        var dispatch = _this.props.dispatch;

        if (changeAnimateIndex >= 0) {
          dispatch((0, _action.changeAnimate)(changeAnimateIndex, {
            name: name
          }));
        } else {
          dispatch((0, _action.addAnimate)(name));
        }

        _this.setState({
          showAnimateName: false,
          changeAnimateIndex: -1
        });
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onPreviewAnimateWithIndex", function (index) {
      return function (e) {
        e.stopPropagation();
        var dispatch = _this.props.dispatch;
        dispatch((0, _action.previewAnimateWithIndex)(index));
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeAnimateNameWithIndex", function (index) {
      return function (e) {
        e.stopPropagation();

        _this.setState({
          showAnimateName: true,
          changeAnimateIndex: index
        });
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setBaseStyle", function (index, key) {
      return function (e) {
        var _this$props = _this.props,
            dispatch = _this$props.dispatch,
            activeEditKey = _this$props.activeEditKey;
        var target = e.target;
        var value = e;

        if (target) {
          value = +target.value;
        }

        dispatch((0, _action.changeAnimation)((0, _defineProperty2["default"])({}, key, value), activeEditKey, index));
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onAddAnimate", function () {
      _this.setState({
        showAnimateName: true,
        changeAnimateIndex: -1
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onPreviewAnimate", function () {
      var dispatch = _this.props.dispatch;
      dispatch((0, _action.previewAnimate)());
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onRemoveAnimate", function (index) {
      return function (e) {
        e.stopPropagation();
        var dispatch = _this.props.dispatch;
        dispatch((0, _action.removeAnimate)(index));
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onHoverAnimate", function (name) {
      return function () {
        var dispatch = _this.props.dispatch;
        dispatch((0, _action.hoverAnimate)(name));
      };
    });
    return _this;
  }

  (0, _createClass2["default"])(Animation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var showAnimateName = this.state.showAnimateName;
      var _this$props2 = this.props,
          animate = _this$props2.animate,
          _this$props2$animates = _this$props2.animates,
          animates = _this$props2$animates === void 0 ? [] : _this$props2$animates;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "animate-container"
      }, /*#__PURE__*/_react["default"].createElement(_row["default"], {
        align: "middle",
        type: "flex",
        gutter: 8,
        justify: "center"
      }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
        span: 12,
        className: "text-center"
      }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
        type: "primary",
        onClick: this.onAddAnimate
      }, "\u6DFB\u52A0\u52A8\u753B")), /*#__PURE__*/_react["default"].createElement(_col["default"], {
        span: 12,
        className: "text-center"
      }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
        onClick: this.onPreviewAnimate
      }, "\u9884\u89C8\u52A8\u753B"))), /*#__PURE__*/_react["default"].createElement(_collapse["default"], null, animates.map(function (that, index) {
        var name = that.name,
            delay = that.delay,
            repeat = that.repeat,
            duration = that.duration;
        var animateName = name;
        opts.forEach(function (item) {
          var obj = item.list.find(function (it) {
            return it.key === name;
          });

          if (obj) {
            animateName = obj.title;
          }
        });
        return /*#__PURE__*/_react["default"].createElement(_collapse["default"].Panel, {
          header: /*#__PURE__*/_react["default"].createElement(_row["default"], {
            type: "flex",
            gutter: 8,
            justify: "space-around"
          }, /*#__PURE__*/_react["default"].createElement(_col["default"], null, "\u52A8\u753B", index + 1), /*#__PURE__*/_react["default"].createElement(_col["default"], {
            onClick: _this2.onChangeAnimateNameWithIndex(index)
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "aniamte-name"
          }, animateName)), /*#__PURE__*/_react["default"].createElement(_col["default"], {
            className: "op-animate"
          }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
            onClick: _this2.onPreviewAnimateWithIndex(index),
            type: "caret-right",
            title: "\u9884\u89C8"
          }), /*#__PURE__*/_react["default"].createElement(_icon["default"], {
            onClick: _this2.onRemoveAnimate(index),
            title: "\u5220\u9664",
            type: "delete"
          }))),
          key: index
        }, /*#__PURE__*/_react["default"].createElement(_row["default"], {
          align: "middle",
          type: "flex",
          gutter: 8
        }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
          span: 8
        }, "\u52A8\u753B\u65F6\u95F4"), /*#__PURE__*/_react["default"].createElement(_col["default"], {
          span: 16
        }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
          value: duration,
          type: "number",
          onChange: _this2.setBaseStyle(index, 'duration')
        }))), /*#__PURE__*/_react["default"].createElement(_row["default"], {
          align: "middle",
          type: "flex",
          gutter: 8
        }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
          span: 8
        }, "\u52A8\u753B\u5EF6\u65F6"), /*#__PURE__*/_react["default"].createElement(_col["default"], {
          span: 16
        }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
          value: delay,
          type: "number",
          onChange: _this2.setBaseStyle(index, 'delay')
        }))), /*#__PURE__*/_react["default"].createElement(_row["default"], {
          align: "middle",
          type: "flex",
          gutter: 8
        }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
          span: 8
        }, "\u52A8\u753B\u5FAA\u73AF"), /*#__PURE__*/_react["default"].createElement(_col["default"], {
          span: 16
        }, /*#__PURE__*/_react["default"].createElement(_select["default"], {
          onChange: _this2.setBaseStyle(index, 'repeat'),
          style: {
            width: '100%'
          },
          value: repeat
        }, /*#__PURE__*/_react["default"].createElement(Option, {
          value: _constants.ANIMATE_REPEAT_NORMAL
        }, "\u9ED8\u8BA4"), /*#__PURE__*/_react["default"].createElement(Option, {
          value: _constants.ANIMATE_REPEAT_INFINITE
        }, "\u65E0\u9650\u5FAA\u73AF")))));
      })), showAnimateName && /*#__PURE__*/_react["default"].createElement("div", {
        className: "animate-names"
      }, /*#__PURE__*/_react["default"].createElement(_row["default"], {
        align: "middle",
        type: "flex",
        gutter: 8
      }, /*#__PURE__*/_react["default"].createElement(_tabs["default"], {
        size: "small"
      }, opts.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_tabs["default"].TabPane, {
          tab: item.title,
          key: item.title
        }, /*#__PURE__*/_react["default"].createElement(_row["default"], {
          align: "middle",
          type: "flex",
          gutter: 8,
          className: "animte-overflow"
        }, item.list.map(function (it) {
          return /*#__PURE__*/_react["default"].createElement(_col["default"], {
            span: 8,
            key: it.key
          }, /*#__PURE__*/_react["default"].createElement(_row["default"], {
            type: "flex",
            justify: "center",
            className: "animate-name-item ".concat(it.key === 1 ? 'active' : ''),
            onClick: _this2.onChangeAnimateName(it.key),
            onMouseEnter: _this2.onHoverAnimate(it.key)
          }, /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
            type: "smile"
          }), /*#__PURE__*/_react["default"].createElement("div", {
            className: "animte-desc"
          }, it.title))));
        })));
      })))));
    }
  }]);
  return Animation;
}(_react["default"].Component);

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

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Animation);

exports["default"] = _default;