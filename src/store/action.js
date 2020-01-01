import {
  MOVE_START, MOVE_END, MOVE_CHANGE, CREATE_ITEM_STORE,
  RESET_CONTENT_HEIGHT, CHANGE_ACTIVE_EDIT_KEY, ADD_ITEM_ATTRS, CHANGE_ITEM_ATTR,
  CHANGE_ITEM_BASE_STYLE, STORE_ADD_PAGE, CHANGE_ACTIVE_PAGE, ADD_PAGE_ITEM,
  REMOVE_ITEM, SAVE_MOVE_START_RECT, PAGE_ITEM_RESORT,
  CHANGE_ALL_PAGE_BACKGROUND, STORE_RESET_TO_EDIT, STORE_CHANGE_BACK_MUSIC_URL, ADD_ACTIVE_EDIT_KEY,
  STORE_GROUP_ACTIVE_EDIT_KEYS, CHANGE_ANIMATION, STORE_GROUP_SPLIT, STORE_INIT_TO_EDIT,
  ACTION_COPY_PAGE, ACTION_COPY_ITEM, ACTION_DELETE_PAGE, ACTION_ADD_PAGE_ITEM_WITH_ATTRS,
  ACTION_INIT_HISTORY_STORE, ACTION_ADD_PAGE_ITEM_WITH_SIZE, ACTION_CHANGE_ITEM_BORDER,
  ACTION_CHANGE_ITEM_NAME, ACTION_RESORT_GROUP_ITEM, ACTION_PAGE_MOVE_DOWN, ACTION_PAGE_MOVE_UP,
} from '../core/constants';

export function startMove(value) {
  return {
    type: MOVE_START,
    value,
  };
}

export function endMove(value) {
  return {
    type: MOVE_END,
    value,
  };
}

export function change(value) {
  return {
    type: MOVE_CHANGE,
    value,
  };
}

export function createItemStore(value) {
  return { type: CREATE_ITEM_STORE, value };
}

export function resetContentHeight(value) {
  return { type: RESET_CONTENT_HEIGHT, value };
}

export function changeActiveEditKey(value) {
  return { type: CHANGE_ACTIVE_EDIT_KEY, value };
}

export function addActiveEditKey(value) {
  return { type: ADD_ACTIVE_EDIT_KEY, value };
}

export function addAttrs(attrs, key) {
  return { type: ADD_ITEM_ATTRS, value: { attrs, key } };
}

export function changeAttrs(attrs, key) {
  return { type: CHANGE_ITEM_ATTR, value: { attrs, key } };
}

export function changeBaseStyle(style, key) {
  return { type: CHANGE_ITEM_BASE_STYLE, value: { style, key } };
}

export function addPage() {
  return { type: STORE_ADD_PAGE };
}

export function changeActivePage(value) {
  return { type: CHANGE_ACTIVE_PAGE, value };
}

export function addPageItem(value) {
  return { type: ADD_PAGE_ITEM, value };
}

export function removeItem() {
  return { type: REMOVE_ITEM };
}

export function saveMoveTagBoundingClientRect(value) {
  return { type: SAVE_MOVE_START_RECT, value };
}

export function resortPageItem(value) {
  return { type: PAGE_ITEM_RESORT, value };
}

export function changeBackGround(value) {
  return { type: CHANGE_ALL_PAGE_BACKGROUND, value };
}

export function resetStore(value) {
  return { type: STORE_RESET_TO_EDIT, value };
}

export function initStore(value) {
  return { type: STORE_INIT_TO_EDIT, value };
}

export function changeBackMusicUrl(value) {
  return { type: STORE_CHANGE_BACK_MUSIC_URL, value };
}

export function groupActiveEditKeys() {
  return { type: STORE_GROUP_ACTIVE_EDIT_KEYS };
}

export function changeAnimation(style, key) {
  return { type: CHANGE_ANIMATION, value: { style, key } };
}

export function splitGroupActiveEditKeys() {
  return { type: STORE_GROUP_SPLIT };
}

export function copyPage() {
  return { type: ACTION_COPY_PAGE };
}

export function copyItem(value) {
  return { type: ACTION_COPY_ITEM, value };
}

export function deletePage(value) {
  return { type: ACTION_DELETE_PAGE, value };
}

export function addPageItemWithAttrs(type, attrs) {
  return { type: ACTION_ADD_PAGE_ITEM_WITH_ATTRS, value: { type, attrs } };
}

export function addPageItemWithSize(type, size) {
  return { type: ACTION_ADD_PAGE_ITEM_WITH_SIZE, value: { type, size } };
}

export function initHistoryStore(value) {
  return { type: ACTION_INIT_HISTORY_STORE, value };
}

export function changeItemBorder(key, value) {
  return { type: ACTION_CHANGE_ITEM_BORDER, value: { key, border: value } };
}

export function changeItemName(key, value) {
  return { type: ACTION_CHANGE_ITEM_NAME, value: { key, name: value } };
}

export function resortGroupItem(key, list) {
  return { type: ACTION_RESORT_GROUP_ITEM, value: { key, list } };
}

export function movePageToDown() {
  return { type: ACTION_PAGE_MOVE_DOWN };
}

export function movePageToUp() {
  return { type: ACTION_PAGE_MOVE_UP };
}
