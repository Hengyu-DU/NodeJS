# Node.js 课程

## 第一章 Node.js

### 1.1 Node.js诞生史

Node.js之父：Ryan Dahl（瑞安·达尔）
Node.js诞生时间：2009年

- Ryan Dahl并非科班出身的开发者，在2004年在纽约的罗彻斯特大学数学系读博士。
- 2006年退学，来到智利的 Valparaiso小镇。
- 期问曾熬夜做了一些不切实际的研究，例如如何通过云进行通信。
- 偶然的机会，走上了编程之路，生活方式变为接项目，然后去客户的地方工作。
- 工作中遇到了主流服务器的瓶颈问题，尝试着自己去解决，费尽周折没有办法。
- 2008年 Google公司 Chrome V8引擎橫空出世， JavaScript脚本语言的执行效率得到质的提升，他的想法与 Chrome v8引擎碰撞出激烈的火花。
- 2009年的2月，按新的想法他提交了项目的第一行代码，这个项目的名字最终被定
名为“node”。
- 2009年5月，正式向外界宣布他做的这个项目。
- 2009年底， Ryan Dahl在柏林举行的 JSConf EU会议上发表关于 Node. js的演讲，之后Node.js逐渐流行于世。
- Ryan Dah于2010年加入 Joyent公司，全职负责 Node. js项目的开发。此时 Node. js项目己经从个人项目变成一个公司组织下的项目

### 1.2 Node.js是什么？

Node.js是一个基于ChromeV8 引擎的 JavaScript 运行环境。

![](./img/nodejs技术.jpg)

大白话：用JS代码编写一个服务器，运行在node.js这个平台上，可以操作文件。

### 1.3 Node.js有什么特点

1. 优点

  - 异步非阻塞的I/O（I/O线程池）

  - 特别适用于**I/O密集型**应用

  - 事件循环机制

  - 单线程（成也单线程，败也单线程）

  - 跨平台

简单的web交互模型：

![](./img/web交互模型.jpg)


2. 不足之处

  - 回调函数嵌套太多、太深（俗称回调地狱）
  
  - 单线程，**处理不好CPU密集型任务**


3. 大白话解释：

  - I/O: input（写），output（读），即数据库的读写操作

  - I/O密集型：频繁操作I/O

![](./img/灵魂画手.jpg)

### 1.4 Node中函数的特点

1. Node中任何一个模块（js文件）都被一个外层函数所包裹
  ```js
  function (exports, require, module, __filename, __dirname) {}
  ```
  - exports, require, module => 用于支持CommonJs模块化规范的暴露、引入语法

  - __filename => 当前运行文件的绝对路径

  - __dirname =>  当前运行文件所在文件夹的绝对路径
 
2. 为什么要设计这个外层函数？

  1 用于支持模块儿化语法

  2 隐藏服务器内部实现（从作用域角度去看）

### 1.5 Node中的global

1. 浏览器端，js由哪几部分组成？

  - BOM -> window浏览器对象模型 -> 很多API（location，history）

  - DOM ->  document文档对象模型 -> 很多API（对DOM的增删改查）

  - ES规范 -> ES5,ES6

2. Node端，js由哪几部分组成？

  - 没有了BOM -> 因为服务器不需要（服务器没有浏览器对象）
  
  - 没有了DOM -> 因为没有浏览器窗口

  - 几乎包含了所有的ES规范

  - 没有了window，但是取而代之的是一个叫global的全局变量

  （Node中禁止函数的this指向global，而是指向了一个空对象。）
  console.log(this)
  console.log(global)

  ```js
  <ref *1> Object [global] {
    global: [Circular *1],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    }
  }
  ```

3. 事件循环机制

   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘