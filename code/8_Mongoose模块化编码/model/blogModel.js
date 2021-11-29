const mongoose = require('mongoose')

const Schema = mongoose.Schema  // ---- 引入模式对象
// const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({   // ----- 创建约束对象
  author: {type: String, required:true, unique:true},
  title: String,
  body: String,
  date: Date
})

module.exports =  mongoose.model('Blogs',BlogPost) //  ----- 创建模型对象