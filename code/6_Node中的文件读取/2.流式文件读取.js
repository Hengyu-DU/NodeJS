
let {createReadStream, createWriteStream} = require('fs')

//创建一个可读流

let rs = createReadStream(__dirname+'/demo.txt',{
  highWaterMark:10 * 1024 * 1024  // 这个配置用的最多
})

let ws = createWriteStream('./haha.txt')

rs.on('open',function(){
  console.log('可读流打开');
})
rs.on('close',function(){
  console.log('可读流关掉');
  ws.close()
})
ws.on('open',function(){
  console.log('可写流打开');
})
ws.on('close',function(){
  console.log('可写流关掉');
})

// 给可读流绑定一个data事件，就会触发可读自动读取内容

rs.on('data',function(data){
  console.log(data.toString());
  // Buffer实例的length属性，是表示该Buffer实例占用内存空间的大小
  console.log(data.length);
  ws.write(data)
  // ws.close() // 若在此处关闭流，会写入一次，如果数据较大，后续数据会丢失
})
// ws.close() // 若在此处关闭流，导致无法写入数据
