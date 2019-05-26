// 象限标识
// 第一
export const QUADRANT_FIRST = 1;
// 第二
export const QUADRANT_SECOND = 2;
// 第三
export const QUADRANT_THREE = 3;
// 第四
export const QUADRANT_FOUR = 4;

// 标识控制点
export const POINT_LEFT = 'l';
export const POINT_RIGHT = 'r';
export const POINT_TOP = 't';
export const POINT_BOTTOM = 'b';
export const POINT_LEFT_CENTER = 'lc';
export const POINT_RIGHT_CENTER = 'rc';
export const POINT_TOP_CENTER = 'tc';
export const POINT_BOTTOM_CENTER = 'bc';
export const POINT_LEFT_TOP = 'lt';
export const POINT_RIGHT_TOP = 'rt';
export const POINT_LEFT_BOTTOM = 'lb';
export const POINT_RIGHT_BOTTOM = 'rb';
export const POINT_ROTATE = 'rotate';

// action type
// 移动整个框
export const ALL_ITEM = 'ALL_ITEM';
// 开始移动
export const MOVE_START = 'MOVE_START';
// 移动结束
export const MOVE_END = 'MOVE_END';
// 移动取消
export const MOVE_CHANGE = 'MOVE_CHANGE';
// 创建编辑框初始配置
export const CREATE_ITEM_STORE = 'CREATE_ITEM_STORE';
// 重置内容高度
export const RESET_CONTENT_HEIGHT = 'RESET_CONTENT_HEIGHT';
// 改变当前激活的编辑框标识
export const CHANGE_ACTIVE_EDIT_KEY = 'CHANGE_ACTIVE_EDIT_KEY';
// 添加额外属性
export const ADD_ITEM_ATTRS = 'ADD_ITEM_ATTRS';
// 改变额外属性
export const CHANGE_ITEM_ATTR = 'CHANGE_ITEM_ATTR';
// 改变基础几何属性
export const CHANGE_ITEM_BASE_STYLE = 'CHANGE_ITEM_BASE_STYLE';
// 添加页面
export const STORE_ADD_PAGE = 'STORE_ADD_PAGE';
// 切换激活页面
export const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE';
// 添加页面元素
export const ADD_PAGE_ITEM = 'ADD_PAGE_ITEM';
// 移除页面元素
export const REMOVE_ITEM = 'REMOVE_ITEM';
// 修改元素旋转角度
export const CHANGE_ITEM_ROTATE = 'CHANGE_ITEM_ROTATE';
// 修改元素旋转角度
export const SAVE_MOVE_START_RECT = 'SAVE_MOVE_START_RECT';
// 页面元素重新排序
export const PAGE_ITEM_RESORT = 'PAGE_ITEM_RESORT';

// 组件类型
// 文本
export const COMPONENT_TYPE_TEXT = 'COMPONENT_TYPE_TEXT';
// 图片
export const COMPONENT_TYPE_PICTURE = 'COMPONENT_TYPE_PICTURE';

// 组件设置
export const COMPONENT_STYLE_WIDHT = 'width';
export const COMPONENT_STYLE_HEIGHT = 'height';
export const COMPONENT_STYLE_TOP = 'top';
export const COMPONENT_STYLE_LEFT = 'left';
export const COMPONENT_STYLE_ROTATE = 'rotate';

/* 动画相关 */
export const ANIMATE_REPEAT_INFINITE = 'infinite';
export const ANIMATE_REPEAT_NORMAL = 1;
