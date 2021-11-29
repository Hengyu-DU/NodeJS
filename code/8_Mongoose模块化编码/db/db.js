const mongoose = require('mongoose')

//1 连接数据库
mongoose.connect('mongodb://localhost:27017/test')

//2 绑定数据库连接的监听
mongoose.connection.on('open',function(err){
  if(err){
    console.log('数据库连接失败',err);
  }else{
    console.log('数据库连接成功');
  }
})