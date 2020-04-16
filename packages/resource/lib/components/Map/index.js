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

var _map = require("../../utils/map");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MapContainer = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(MapContainer, _React$Component);

  var _super = _createSuper(MapContainer);

  function MapContainer() {
    var _this;

    (0, _classCallCheck2["default"])(this, MapContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "containerRef", _react["default"].createRef());
    return _this;
  }

  (0, _createClass2["default"])(MapContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var current = this.containerRef.current;

      if (current) {
        (0, _map.createMap)().then(function (BMap) {
          // 创建地图实例
          var map = new BMap.Map(current);
          _this2.mapHandler = map;

          _this2.centerPoint(); //   初始化地图，设置中心点坐标和地图级别

        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      //   console.log(prevProps, this.props);
      if (prevProps.address !== this.props.address) {
        this.centerPoint();
      }
    }
  }, {
    key: "centerPoint",
    value: function centerPoint() {
      if (this.mapHandler) {
        var myGeo = new window.BMap.Geocoder();
        var map = this.mapHandler;
        myGeo.getPoint(this.props.address, function (point) {
          if (point) {
            map.centerAndZoom(point, 16);
            map.clearOverlays();
            map.addOverlay(new window.BMap.Marker(point));
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.containerRef,
        style: {
          width: '100%',
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none'
        }
      });
    }
  }]);
  return MapContainer;
}(_react["default"].Component);

exports["default"] = MapContainer;