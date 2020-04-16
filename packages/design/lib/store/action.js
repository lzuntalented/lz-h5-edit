"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startMove = startMove;
exports.endMove = endMove;
exports.change = change;
exports.createItemStore = createItemStore;
exports.resetContentHeight = resetContentHeight;
exports.changeActiveEditKey = changeActiveEditKey;
exports.addActiveEditKey = addActiveEditKey;
exports.addAttrs = addAttrs;
exports.changeAttrs = changeAttrs;
exports.changeBaseStyle = changeBaseStyle;
exports.addPage = addPage;
exports.changeActivePage = changeActivePage;
exports.addPageItem = addPageItem;
exports.removeItem = removeItem;
exports.saveMoveTagBoundingClientRect = saveMoveTagBoundingClientRect;
exports.resortPageItem = resortPageItem;
exports.changeBackGround = changeBackGround;
exports.resetStore = resetStore;
exports.initStore = initStore;
exports.changeBackMusicUrl = changeBackMusicUrl;
exports.groupActiveEditKeys = groupActiveEditKeys;
exports.changeAnimation = changeAnimation;
exports.splitGroupActiveEditKeys = splitGroupActiveEditKeys;
exports.copyPage = copyPage;
exports.copyItem = copyItem;
exports.deletePage = deletePage;
exports.addPageItemWithAttrs = addPageItemWithAttrs;
exports.addPageItemWithSize = addPageItemWithSize;
exports.initHistoryStore = initHistoryStore;
exports.changeItemBorder = changeItemBorder;
exports.changeItemName = changeItemName;
exports.resortGroupItem = resortGroupItem;
exports.movePageToDown = movePageToDown;
exports.movePageToUp = movePageToUp;
exports.addAnimate = addAnimate;
exports.removeAnimate = removeAnimate;
exports.changeAnimate = changeAnimate;
exports.previewAnimate = previewAnimate;
exports.hoverAnimate = hoverAnimate;
exports.emptyAnimate = emptyAnimate;
exports.previewAnimateWithIndex = previewAnimateWithIndex;
exports.changeMultiActiveAlign = changeMultiActiveAlign;
exports.changeSingleActiveAlign = changeSingleActiveAlign;
exports.changeActiveItemAttrs = changeActiveItemAttrs;

var _constants = require("../core/constants");

function startMove(value) {
  return {
    type: _constants.MOVE_START,
    value: value
  };
}

function endMove(value) {
  return {
    type: _constants.MOVE_END,
    value: value
  };
}

function change(value) {
  return {
    type: _constants.MOVE_CHANGE,
    value: value
  };
}

function createItemStore(value) {
  return {
    type: _constants.CREATE_ITEM_STORE,
    value: value
  };
}

function resetContentHeight(value) {
  return {
    type: _constants.RESET_CONTENT_HEIGHT,
    value: value
  };
}

function changeActiveEditKey(value) {
  return {
    type: _constants.CHANGE_ACTIVE_EDIT_KEY,
    value: value
  };
}

function addActiveEditKey(value) {
  return {
    type: _constants.ADD_ACTIVE_EDIT_KEY,
    value: value
  };
}

function addAttrs(attrs, key) {
  return {
    type: _constants.ADD_ITEM_ATTRS,
    value: {
      attrs: attrs,
      key: key
    }
  };
}

function changeAttrs(attrs, key) {
  return {
    type: _constants.CHANGE_ITEM_ATTR,
    value: {
      attrs: attrs,
      key: key
    }
  };
}

function changeBaseStyle(style, key) {
  return {
    type: _constants.CHANGE_ITEM_BASE_STYLE,
    value: {
      style: style,
      key: key
    }
  };
}

function addPage() {
  return {
    type: _constants.STORE_ADD_PAGE
  };
}

function changeActivePage(value) {
  return {
    type: _constants.CHANGE_ACTIVE_PAGE,
    value: value
  };
}

function addPageItem(value) {
  return {
    type: _constants.ADD_PAGE_ITEM,
    value: value
  };
}

function removeItem() {
  return {
    type: _constants.REMOVE_ITEM
  };
}

function saveMoveTagBoundingClientRect(value) {
  return {
    type: _constants.SAVE_MOVE_START_RECT,
    value: value
  };
}

function resortPageItem(value) {
  return {
    type: _constants.PAGE_ITEM_RESORT,
    value: value
  };
}

function changeBackGround(value) {
  return {
    type: _constants.CHANGE_ALL_PAGE_BACKGROUND,
    value: value
  };
}

function resetStore(value) {
  return {
    type: _constants.STORE_RESET_TO_EDIT,
    value: value
  };
}

function initStore(value) {
  return {
    type: _constants.STORE_INIT_TO_EDIT,
    value: value
  };
}

function changeBackMusicUrl(value) {
  return {
    type: _constants.STORE_CHANGE_BACK_MUSIC_URL,
    value: value
  };
}

function groupActiveEditKeys() {
  return {
    type: _constants.STORE_GROUP_ACTIVE_EDIT_KEYS
  };
}

function changeAnimation(style, key, index) {
  return {
    type: _constants.CHANGE_ANIMATION,
    value: {
      style: style,
      key: key,
      index: index
    }
  };
}

function splitGroupActiveEditKeys() {
  return {
    type: _constants.STORE_GROUP_SPLIT
  };
}

function copyPage() {
  return {
    type: _constants.ACTION_COPY_PAGE
  };
}

function copyItem(value) {
  return {
    type: _constants.ACTION_COPY_ITEM,
    value: value
  };
}

function deletePage(value) {
  return {
    type: _constants.ACTION_DELETE_PAGE,
    value: value
  };
}

function addPageItemWithAttrs(type, attrs) {
  return {
    type: _constants.ACTION_ADD_PAGE_ITEM_WITH_ATTRS,
    value: {
      type: type,
      attrs: attrs
    }
  };
}

function addPageItemWithSize(type, size) {
  return {
    type: _constants.ACTION_ADD_PAGE_ITEM_WITH_SIZE,
    value: {
      type: type,
      size: size
    }
  };
}

function initHistoryStore(value) {
  return {
    type: _constants.ACTION_INIT_HISTORY_STORE,
    value: value
  };
}

function changeItemBorder(key, value) {
  return {
    type: _constants.ACTION_CHANGE_ITEM_BORDER,
    value: {
      key: key,
      border: value
    }
  };
}

function changeItemName(key, value) {
  return {
    type: _constants.ACTION_CHANGE_ITEM_NAME,
    value: {
      key: key,
      name: value
    }
  };
}

function resortGroupItem(key, list) {
  return {
    type: _constants.ACTION_RESORT_GROUP_ITEM,
    value: {
      key: key,
      list: list
    }
  };
}

function movePageToDown() {
  return {
    type: _constants.ACTION_PAGE_MOVE_DOWN
  };
}

function movePageToUp() {
  return {
    type: _constants.ACTION_PAGE_MOVE_UP
  };
}

function addAnimate(animateName) {
  return {
    type: _constants.ACTION_ANIMATES_ADD,
    value: animateName
  };
}

function removeAnimate(index) {
  return {
    type: _constants.ACTION_ANIMATES_REMOVE,
    value: index
  };
}

function changeAnimate(index, attrs) {
  return {
    type: _constants.ACTION_ANIMATES_CHANGE,
    value: {
      index: index,
      attrs: attrs
    }
  };
}

function previewAnimate() {
  return {
    type: _constants.ACTION_ANIMATES_PREVIEW
  };
}

function hoverAnimate(name) {
  return {
    type: _constants.ACTION_ANIMATES_HOVER,
    value: name
  };
}

function emptyAnimate() {
  return {
    type: _constants.ACTION_ANIMATES_EMPTY
  };
}

function previewAnimateWithIndex(index) {
  return {
    type: _constants.ACTION_ANIMATES_PREVIEW_ONE,
    value: index
  };
}

function changeMultiActiveAlign(action) {
  return {
    type: action
  };
}

function changeSingleActiveAlign(action) {
  return {
    type: action
  };
}

function changeActiveItemAttrs(value) {
  return {
    type: _constants.ACTION_CHANGE_ACTIVE_ITEM_ATTRS,
    value: value
  };
}