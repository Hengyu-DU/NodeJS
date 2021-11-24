### npm

npm 是node的包管理器，可以通过npm下载第三方模块，也可以通过npm管理一整个Node项目或前端开发项目的所有依赖。（服务器在国外）
```powershell
$ npm -v
```

### cnpm

淘宝为国内用户提供的npm镜像
```powershell
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

将npm直接配置为淘宝镜像：

```powershell
$ npm config set registry https://registry.npm.taobao.org
```

验证是否配置完成，出现网址证明配置完成
```powershell
$ npm config get registry
```

