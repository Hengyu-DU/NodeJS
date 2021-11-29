const mongoose = require('mongoose')

//1 连接数据库
mongoose.connect('mongodb://localhost:27017/test')

//2 绑定数据库连接的监听
mongoose.connection.on('open',function(err){
  if(err){
    console.log('数据库连接失败',err);
  }else{
    console.log('数据库连接成功');
    
    //3 操作数据库
    const Schema = mongoose.Schema  //----引入模式对象
    const ObjectId = Schema.ObjectId;

    const BlogPost = new Schema({   // ----- 创建约束对象
      author: {type: String, required:true, unique:true},
      title: String,
      body: String,
      date: Date
    })

    // const Comment = new Schema({  
    //   name: { type: String, default: 'hahaha' },
    //   age: { type: Number, min: 18, index: true },
    //   bio: { type: String, match: /[a-z]/ },
    //   date: { type: Date, default: Date.now },
    //   body: Schema.Types.Mixed // 接收所有类型
    // });

    let blogModel = mongoose.model('Blogs',BlogPost) // 用于生成某个集合所对应的模型对象  ---创建模型对象

    // 新增操作 ---C
    blogModel.create({
      author: 'Hello',
      title: 'NONO2323',
      body: '凑数的121',
      date: new Date()
    },function(err,data){
        if(!err) console.log(data)
        else console.log(err)
    })
  

    // 查询操作 ---F
    /**
     * find方法：
     *  1. 返回结果是一个数组，就算是一条数据，也包裹一个数组
     *  2. 若查询结果为空，则返回空数组
     */
    // blogModel.find({author:'HEY'},{title:1,_id:0},function(err,data){
    //   if(!err) console.log(data)
    //   else console.log(err)
    // })
    

    // 更新操作 ---U
    // blogModel.updateOne({author:'HEY'},{title:'New Title'},function(err,data){
    //     if(!err) console.log(data)
    //     else console.log(err)
    //   })


    // 删除操作 ---D
    // blogModel.deleteOne({author:'Hengyu'},function(err,data){
    //     if(!err) console.log(data)
    //     else console.log(err)
    //   })


  
  
  
  }
})
