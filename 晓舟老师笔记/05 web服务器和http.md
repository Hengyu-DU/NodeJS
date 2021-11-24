### 客户端与服务器
* 请求：浏览器向服务器要数据
* 响应：服务器给浏览器发送数据
* 地址：我们可以通过域名或ip访问到一个网站，域名或者ip就是这个网站的地址。
* 端口：一个ip或者一个域名可以找到一台服务器，但是这台服务器可以对外服务多个网站，他们的端口是不同的，因此访问一个站点除了输入ip或域名，还要输入端口，平时我们很少输入端口是因为几乎所有的网站都会使用默认的80端口，因此不必输入。

### 创建服务器
通过http模块的createServer方法在本地创建服务器
```js
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello World');
});
server.listen(3000, () => {
  console.log(`Server is running`);
}); // listen方法定义服务器端口
```
在node中执行这个文件，出现提示：
```
Server running at http://127.0.0.1:3000/
```
在地址栏输入上述地址即可访问

### nodemon
用于在修改文件后，服务器即时自动重启