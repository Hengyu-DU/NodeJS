const mongoose = require('mongoose')
const blogModel = require('../model/blogModel')


// 判断，若成功，CRUD



//3 操作数据库
// 新增操作 ---C
blogModel.create({
  author: 'Why',
  title: 'NONO23233',
  body: '凑2数的121',
  date: new Date()
},function(err,data){
    if(!err) console.log(data)
    else console.log(err)
})