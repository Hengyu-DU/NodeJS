const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test')

mongoose.connection.on('open',function(err){
  if(err){
    console.log('数据库连接失败',err);
  }else{
    console.log('数据库连接成功');
  }
})