"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/row/style/css");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/icon/style/css");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/col/style/css");

var _col = _interopRequireDefault(require("antd/lib/col"));

require("antd/lib/input/style/css");

var _input = _interopRequireDefault(require("antd/lib/input"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSortableHoc = require("react-sortable-hoc");

var _classnames = _interopRequireDefault(require("classnames"));

function Item(props) {
  var value = props.value,
      onItemClick = props.onItemClick,
      onItemCopyClick = props.onItemCopyClick,
      group = props.group,
      children = props.children,
      onChangeItemName = props.onChangeItemName;
  var name = value.name,
      key = value.key,
      active = value.active;
  var cls = active ? 'active' : '';

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      editAble = _useState2[0],
      setEditAble = _useState2[1];

  var _useState3 = (0, _react.useState)(name),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      inputVal = _useState4[0],
      setInputVal = _useState4[1];

  var onInputValueChange = function onInputValueChange(e) {
    setInputVal(e.target.value);
  };

  var onItemEditClick = function onItemEditClick() {
    setEditAble(true);
  };

  var onInputBlur = function onInputBlur() {
    setEditAble(false);
    onChangeItemName(key, inputVal);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('level-item', group && 'group-names')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('name', cls),
    onMouseDown: onItemClick(key)
  }, /*#__PURE__*/_react["default"].createElement(_row["default"], {
    type: "flex",
    justify: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    style: {
      flex: 1
    }
  }, editAble ? /*#__PURE__*/_react["default"].createElement(_input["default"], {
    value: inputVal,
    onChange: onInputValueChange,
    onBlur: onInputBlur
  }) : name), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    onMouseDown: onItemEditClick
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    type: "edit"
  })), /*#__PURE__*/_react["default"].createElement(_col["default"], {
    className: "m-l-8",
    onMouseDown: onItemCopyClick(key)
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    type: "copy"
  })))), children);
}

Item.propTypes = {
  value: _propTypes["default"].object.isRequired,
  onItemClick: _propTypes["default"].func.isRequired,
  onItemCopyClick: _propTypes["default"].func.isRequired,
  onChangeItemName: _propTypes["default"].func.isRequired,
  group: _propTypes["default"].bool,
  children: _propTypes["default"].any
};
Item.defaultProps = {
  group: false,
  children: null
};

var _default = (0, _reactSortableHoc.SortableElement)(Item);

exports["default"] = _default;