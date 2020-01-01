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
// 添加当前激活的编辑框标识
export const ADD_ACTIVE_EDIT_KEY = 'ADD_ACTIVE_EDIT_KEY';
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
// 修改背景图片
export const CHANGE_ALL_PAGE_BACKGROUND = 'CHANGE_ALL_PAGE_BACKGROUND';
// 修改背景音效
export const STORE_CHANGE_BACK_MUSIC_URL = 'STORE_CHANGE_BACK_MUSIC_URL';
// 重置store以供编辑
export const STORE_RESET_TO_EDIT = 'STORE_RESET_TO_EDIT';
// 初始化store以供编辑，完全依赖外部数据重置
export const STORE_INIT_TO_EDIT = 'STORE_INIT_TO_EDIT';
// 分组编辑状态下元素
export const STORE_GROUP_ACTIVE_EDIT_KEYS = 'STORE_GROUP_ACTIVE_EDIT_KEYS';
// 拆分组合元素
export const STORE_GROUP_SPLIT = 'STORE_GROUP_SPLIT';
// 修改动画属性
export const CHANGE_ANIMATION = 'CHANGE_ANIMATION';
// 拷贝页面
export const ACTION_COPY_PAGE = 'ACTION_COPY_PAGE';
// 拷贝单个元素
export const ACTION_COPY_ITEM = 'ACTION_COPY_ITEM';
// 删除单个页面
export const ACTION_DELETE_PAGE = 'ACTION_DELETE_PAGE';
// 新增元素，附带私有属性
export const ACTION_ADD_PAGE_ITEM_WITH_ATTRS = 'ACTION_ADD_PAGE_ITEM_WITH_ATTRS';
// 新增元素，附带尺寸
export const ACTION_ADD_PAGE_ITEM_WITH_SIZE = 'ACTION_ADD_PAGE_ITEM_WITH_SIZE';
// 初始化store，在撤销重做里使用
export const ACTION_INIT_HISTORY_STORE = 'ACTION_INIT_HISTORY_STORE';
// 修改元素边框尺寸
export const ACTION_CHANGE_ITEM_BORDER = 'ACTION_CHANGE_ITEM_BORDER';
// 修改元素名称
export const ACTION_CHANGE_ITEM_NAME = 'ACTION_CHANGE_ITEM_NAME';
// 重排组内元素次序
export const ACTION_RESORT_GROUP_ITEM = 'ACTION_RESORT_GROUP_ITEM';
// 将当前页面上移
export const ACTION_PAGE_MOVE_UP = 'ACTION_PAGE_MOVE_UP';
// 将当前页面下移
export const ACTION_PAGE_MOVE_DOWN = 'ACTION_PAGE_MOVE_DOWN';

// 组件类型
// 文本
export const COMPONENT_TYPE_TEXT = 'COMPONENT_TYPE_TEXT';
// 图片
export const COMPONENT_TYPE_PICTURE = 'COMPONENT_TYPE_PICTURE';
// qq视频通话界面
export const COMPONENT_TYPE_QQ_VIDEO = 'COMPONENT_TYPE_QQ_VIDEO';
// 按钮
export const COMPONENT_TYPE_BUTTON = 'COMPONENT_TYPE_BUTTON';
// 输入框
export const COMPONENT_TYPE_INPUT = 'COMPONENT_TYPE_INPUT';
// 艺术字
export const COMPONENT_TYPE_ART_INPUT = 'COMPONENT_TYPE_ART_INPUT';
// 地图
export const COMPONENT_TYPE_MAP = 'COMPONENT_TYPE_MAP';
// 形状
export const COMPONENT_TYPE_SHAPE = 'COMPONENT_TYPE_SHAPE';
// 视频
export const COMPONENT_TYPE_VIDEO = 'COMPONENT_TYPE_VIDEO';
// 文字打字机
export const COMPONENT_TYPE_TEXT_TYPED = 'COMPONENT_TYPE_TEXT_TYPED';

/* 节点类型 */
// 单一节点
export const ITEM_TYPE_SINGLE = 'ITEM_TYPE_SINGLE';
// 组节点
export const ITEM_TYPE_GROUP = 'ITEM_TYPE_GROUP';

// 组件设置
export const COMPONENT_STYLE_WIDHT = 'width';
export const COMPONENT_STYLE_HEIGHT = 'height';
export const COMPONENT_STYLE_TOP = 'top';
export const COMPONENT_STYLE_LEFT = 'left';
export const COMPONENT_STYLE_ROTATE = 'rotate';

/* 动画相关 */
export const ANIMATE_REPEAT_INFINITE = 'infinite';
export const ANIMATE_REPEAT_NORMAL = 1;

/* 本地缓存相关 */
// 命名空间
export const LOCALSTORAGE_PREVIEW_NAMESPACE = 'lz-h5-edit';
// 预览数据标识
export const LOCALSTORAGE_PREVIEW_CHACHE = 'cache';

/* 示例数据路由标识 */
// 高考加油展示
export const EXAMPLE_DATA_COLLEGE_ENTRANCE_EXAMINATION = 'college';
// 儿童节展示
export const EXAMPLE_DATA_CHILDREN_FESTIVAL = 'children';
// 端午节展示
export const EXAMPLE_DATA_DRAGON_FESTIVAL = 'dragon';
// 1024程序员节展示
export const EXAMPLE_DATA_1024 = 'IT1024';
// 双十一展示
export const EXAMPLE_DATA_DOUBLE_ELEVEN = 'double11';
// 双十二展示
export const EXAMPLE_DATA_DOUBLE_TWENTY = 'double12';
// 感恩节展示
export const EXAMPLE_DATA_THINKSGIVING = 'thinksgiving';
// 使用缓存数据标识
export const EXAMPLE_DATA_PREVIEW = 'cache';


/* 样式渲染组件表示 */
// 颜色
export const STYLE_RENDER_TYPE_COLOR = 'STYLE_RENDER_TYPE_COLOR';
// 选择框
export const STYLE_RENDER_TYPE_SELECT = 'STYLE_RENDER_TYPE_SELECT';
// 输入框
export const STYLE_RENDER_TYPE_INPUT = 'STYLE_RENDER_TYPE_INPUT';
// 多行输入框
export const STYLE_RENDER_TYPE_TEXTAREA = 'STYLE_RENDER_TYPE_TEXTAREA';
// 带滑动条的输入框
export const STYLE_RENDER_TYPE_SLIDER_INPUT = 'STYLE_RENDER_TYPE_SLIDER_INPUT';
// 自定义
export const STYLE_RENDER_TYPE_CUSTOM = 'STYLE_RENDER_TYPE_CUSTOM';
// 不需要显示
export const STYLE_RENDER_TYPE_HIDDEN = 'STYLE_RENDER_TYPE_HIDDEN';
// 可编辑的div标签
export const STYLE_RENDER_TYPE_CONTENT_EDIT_DIV = 'STYLE_RENDER_TYPE_CONTENT_EDIT_DIV';

/* 属性值类型 */
// 数字型
export const STYLE_VALUE_TYPE_NUMBER = 'STYLE_VALUE_TYPE_NUMBER';

// 多个属性值设置使用key
export const STYLE_KEY_TYPE_ALL = 'STYLE_KEY_TYPE_ALL';
