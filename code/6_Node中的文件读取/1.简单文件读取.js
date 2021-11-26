/*
 fs.readFile(path[, options], callback)#

 - path <string> | <Buffer> | <URL> | <integer> 文件路径和文件名
  - options <Object> | <string> 配置对象
      - encoding <string> | <null> Default: null
      - flag <string> See support of file system flags. Default: 'r'.
      - signal <AbortSignal> allows aborting an in-progress readFile
  - callback <Function> 回调
      - err <Error> | <AggregateError> 错误对象
      - data <string> | <Buffer></Buffer> 读出来的数据
      */

let fs = require('fs')

fs.readFile(__dirname+'/demo.txt',function(err,data){
  if(err) console.log(err)
  else console.log(data) // <Buffer 68 65 6c 6c 6f 21 21 21 21 21 21>
  fs.writeFile('./haha.txt',data,function(err){
    if(err) console.log(err)
    else console.log('写入成功！')
  })
})