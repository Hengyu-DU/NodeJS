/**
 * 
 * 1. 创建一个可读流
 fs.createWriteStream(path[, options])
 * 
 */



let fs = require('fs')


// 创建一个可写流
let ws = fs.createWriteStream(__dirname+'/demo2.txt',{start:11,flags:"r+"})

//只要用到流，就必须监测流的状态，否则会导致内存溢出
ws.on('open',function(){
  console.log('打开');
})
ws.on('close',function(){
  console.log('关掉');
})

//使用可写流写入大数据
ws.write('22\n') 
ws.write('22\n') 
ws.close()