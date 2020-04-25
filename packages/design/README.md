# 作品设计端

参数名 | 参数说明 |  参数类型  
-|-|-
onPublish | 发布回调 | function
libs | 库参数 | object
libs.picture | 图片参数 | object
libs.picture.initData | 初始化数据 | array
libs.picture.fetchPromise | 获取图片 | Promise
libs.picture.upLoadProps | 图片上传参数 | object
libs.picture.cropImage | 裁剪图片参数 | Promise
libs.music | 音效参数 | object
libs.music.initData | 初始化数据 | array
libs.font | 字体参数 | object
libs.font.initData | 初始化数据 | array
data | 默认数据 | object

### picture.initData 初始化数据

参数名 | 参数说明 |  参数类型  
-|-|-
- | 图片地址链接 | string

### picture.upLoadProps 初始化数据

参数名 | 参数说明 |  参数类型  
-|-|-
name | 上传文件参数名 | string
accept | 上传可以接受类型 | string
action | 上传地址 | string
showUploadList | 是否展示上传列表 | bool

### music.initData 初始化数据

参数名 | 参数说明 |  参数类型  
-|-|-
name | 音效名称 | string
url | 音效地址 | string

### font.initData 初始化数据

参数名 | 参数说明 |  参数类型  
-|-|-
key | 字体唯一标识 | string
name | 字体名称 | string
text | 示例文字 | string
example | 示例文字地址 | string
url | 字体地址 | string