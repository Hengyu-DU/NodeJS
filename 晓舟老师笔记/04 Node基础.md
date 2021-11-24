### 模块化开发

在相应js模块输入
* module.exports = *** 暴露模块接口
* require(url) 引入一个外部模块（路径中的js后缀可省略）

### 外部模块
引入的外部模块有三种情况：
* 核心模块:核心模块是node自带的模块，可以在require引入后直接使用。
* 自定义模块:自定义模块是我们自己编写的，上面模块化的例子中，add.js文件就是一个自定义模块。引入自定义模块需要些完整的路径。
* 第三方模块：使用npm下载的模块是第三方模块，下载完成后可以使用require直接引入

### 核心模块

## fs模块
fs的readFile方法可以读取文件
```js
const fs = require("fs");
fs.readFile("hello.txt", (err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
    // data是buffer类型
})
```

### path模块
可以通过join()方法来连接路径

### http模块

