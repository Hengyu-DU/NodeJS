
/**
 * Node中的文件系统：
 *  1. 在NodeJS中有一个文件系统，所谓的文件系统，就是对着计算机中的文件进行增删改查等操作
 *  2. 在NodeJS中给我们提供了一个模块，叫做fs模块（文件系统），专门用于操作文件
 *  3. fs模块是Node的核心模块，使用的时候，无需下载，直接引入
 */

// 异步文件写入（简单文件写入）
//  fs.writeFile(file, data[, options], callback)

//  - file <string> | <Buffer> | <URL> | <integer> 要写的文件路径+文件名
//  - data <string> | <Buffer> | <TypedArray> | <DataView> | <Object> 要写入的数据
//  - options <Object> | <string> 可选参数
//     - encoding <string> | <null> Default: 'utf8'
//     - mode <integer> Default: 0o666
//     - flag <string> See support of file system flags. Default: 'w'.
//     - signal <AbortSignal> allows aborting an in-progress writeFile
//  - callback <Function>  回调函数
//     - err <Error> | <AggregateError> 错误参数

// Node中有一个原则：错误优先

// 引入内置的fs模块
let fs = require('fs')

// 调入writeFile方法
fs.writeFile(__dirname+"/demo.txt","郭语永远年轻！",{mode:0o666, flag:'a'},(err)=>{
  if(err){
    console.log("文件写入失败",err)
  }else{
    console.log("文件写入成功")
  }
})