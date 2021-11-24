// 1. 浏览器端，js由哪几部分组成？
//   - BOM -> window浏览器对象模型 -> 很多API（location，history）
//   - DOM ->  document文档对象模型 -> 很多API（对DOM的增删改查）
//   - ES规范 -> ES5,ES6

// 2. Node端，js由哪几部分组成？
//   - 没有了BOM -> 因为服务器不需要（服务器没有浏览器对象）
//   - 没有了DOM -> 因为没有浏览器窗口
//   - 几乎包含了所有的ES规范
//   - 没有了window，但是取而代之的是一个叫global的全局变量
//   （Node中禁止函数的this指向global，而是指向了一个空对象。）

  console.log(this) // {}
  console.log(global.global)
/* 
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
} */