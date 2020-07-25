# 使用
> !请先确定你安装了docker

```
在当前目录下执行
# 构建docker镜像
docker build -t lz:0.0.1 .
# 启动容器
docker run --detach -p 80:80 -p 8380:8380 -p 3306:3306 --name lzh51 lz:0.0.1
# 访问
http://localhost
```