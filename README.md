# 随心秀(react版h5微场景编辑器)

## 当前正在进行的工作
> 项目分离，将核心编辑库独立成一个模块，通过npm可以一键引入

## 目标
> 打造一款现象级微场景编辑器 [演示地址](http://show.lzuntalented.cn)

### 预览
![](http://www.lzuntalented.cn/img/edit.gif)

### 手机扫码预览
![手机扫描体验](http://www.lzuntalented.cn/img/eq-11.png)

## 使用

```bash
# 首先安装lerna
npm i lerna -g
# 安装依赖
npm run install
# 构建包
npm run build
# 开发
npm start
# 浏览网站
http://localhost:9999/client.html
# 调试核心编辑器
http://localhost:9999/design.html
# 调试作品
http://localhost:9999/opus.html?id=作品编号

# 本地启动服务端
# 先将server/sql下sql文件导入数据库
npm run server

// 构建
npm run webpack
```

## 开发文档
* [快速开始](http://blog.lzuntalented.cn/sxx/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B.html)
* [项目解析](http://blog.lzuntalented.cn/sxx/%E9%A1%B9%E7%9B%AE%E8%A7%A3%E6%9E%90.html)


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
    - [x] 艺术字

* 示例
    - [x] 示例-端午节
    - [x] 示例-儿童节
    - [x] 示例-高考加油
    - [x] 示例-1024
    - [x] 示例-双十一
    - [x] 示例-感恩节

* 用户模块
    - [x] 登录
    - [x] 注册
    - [x] 作品列表
    - [x] PV数据统计
    - [x] 表单数据统计
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


| QQ交流群  |
| ----  |
| ![QQ交流群](http://www.lzuntalented.cn/img/sxx-qq.png) |

Give a ⭐️ if this project helped you!