## 初始化目录并安装Koa

```
npm init
```
```
cnpm install --save koa
```

## 安装koa路由、静态文件目录
```
cnpm install --save koa-router
cnpm install --save koa-static
```

## 引入Koa并创建应用
```js
const Koa = require("koa") //引入Koa构造函数
const router = require("koa-router")() // 引入并执行koa-router
const static = require("koa-static")
const app = new Koa() // 创建应用

app.listen(3000,() => {
    console.log("server is running")
});

app.use(router.routes()) // 在koa项目中引入router
app.use(static(__dirname + "/public")) // 创建静态目录
```

## 使用get请求获取页面
```js
router.get("/",  async(ctx) => {
    ctx.body = `
        <h1>RESIDENT EVIL</h1>
        <p>R E V E L A T I O N S</p>
        <img src='/images/ReR.jpg'>
    `
})

router.get("/video", async ctx => {
    ctx.body = "video page"
})
```

#### 内部CSS用link引入
``` css
<link rel=stylesheet href="/css/doc.css" />
```
