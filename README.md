# 随心秀(react版h5微场景编辑器)

## 目标
> 打造一款现象级微场景编辑器 [演示地址](http://show.lzuntalented.cn)

### 预览
![](http://www.lzuntalented.cn/img/edit.gif)

### 手机扫码预览
![手机扫描体验](http://www.lzuntalented.cn/img/eq-11.png)

## 使用

```bash
npm i
// 开发
npm start
// 浏览 http://localhost:9901

// 构建
npm run build
```

### 功能

* 编辑器功能
    - [x] 拖拽
    - [x] 缩放
    - [x] 旋转
    - [x] 动画
    - [x] 撤销
    - [x] 重做
    - [x] 组合元素
    - [x] 页面管理
    - [x] 层级管理
    - [x] 辅助线显示

* 物料
    - [x] 文本
    - [x] 图片
    - [x] QQ语言通话
    - [x] 背景
    - [x] 地图
    - [x] 音效
    - [x] 模板
    - [x] 视频
    - [ ] 艺术字

* 示例
    - [x] 示例-端午节
    - [x] 示例-儿童节
    - [x] 示例-高考加油
    - [x] 示例-1024
    - [x] 示例-双十一
    - [x] 示例-感恩节
  
### 如何新增物料
* 1.在src/resource目录下新建组件
``` js
// index.js 文件的导出需要如下格式
export default {
  edit: 编辑态组件,
  render: 渲染太组件,
  style: 属性面板配置文件（普通对象）,
  size: { height: 物料高度 },
  name: 物料名称(层级管理器显示的名字),
};

```
* 2.在src/components.js文件中使用 registerComponent 注册物料
``` js
// components.js 新增如下调用
import 物料组件 from '../resource/物料组件';

registerComponent(自定义组件唯一标识字符串, 物料组件);
```

### 后续规划
> 集中物料仓库建设
* 字体库建设
* 形状库建设
* 艺术字建设（对文字阴影的绘制）
* 背景图片选择及裁剪
* 图层名称支持自定义
* 支持组动画序列播放
* 作品分享操作
* 翻页动画支持多种方式

> 示例模板规划
* 圣诞节模板
* 元旦节模板
* 2019总结模板

### 交流群


|  微信交流群   | QQ交流群  |
|  ----  | ----  |
| ![微信交流群](http://www.lzuntalented.cn/img/sxx-wx.png?1)  | ![QQ交流群](http://www.lzuntalented.cn/img/sxx-qq.png) |

Give a ⭐️ if this project helped you!