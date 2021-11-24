### 本地安装 全局安装

本地安装
```
npm install query
```

全局安装
```
npm install query -g
```

### http-server模块
```
npm install -g http-server
```
1. 在server目录中创建一个index.html文件。
2. 打开浏览器，访问http://127.0.0.1:8080/index.html，可以看到index.html文件的内容。
3. 如果服务器与其他设备处于同一网络（例如同一wify下的手机和电脑），可以使用ip地址访问此网页。

### npm项目初始化
```
npm init
```
创建完成后产生package.json文件

### 安装第三方依赖
```
npm install --save jquery
npm install --save bootstrap
```

在实际开发的过程中，项目代码可能会分享给他人或传输到互联网上，我们没有必要将依赖模块的代码一并传输，只需要传输一个package.json文件即可。