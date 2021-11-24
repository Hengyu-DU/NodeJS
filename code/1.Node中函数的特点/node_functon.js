/**
 * 1. Node中任何一个模块（js文件）都被一个外层函数所包裹
 *  function (exports, require, module, __filename, __dirname) {}
 * 
 *    exports, require, module => 用于支持CommonJs模块化规范的暴露、引入语法
 *    __filename => 当前运行文件的绝对路径
 *    __dirname =>  当前运行文件所在文件夹的绝对路径
 * 
 * 2. 为什么要设计这个外层函数？
 *  1 用于支持模块儿化语法
 *  2 隐藏服务器内部实现（从作用域角度去看）
 */

// 想瞧瞧隐形的外层函数
// console.log(arguments.callee.toString());

// function (exports, require, module, __filename, __dirname) { ??? }

// 如何在一个函数体内，输出函数本身：
/* function demo(){
  console.log(arguments.callee.toString()); // 输入demo函数
}
demo() */

console.log(__filename);
console.log(__dirname);
// C:\Users\victo\Desktop\source\Node.js\code\1.Node中函数的特点\node_functon.js
// C:\Users\victo\Desktop\source\Node.js\code\1.Node中函数的特点