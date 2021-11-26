// 创建一个Buffer的对象实例 --- 性能特别差 --- 1.在堆里开辟空间 2.清理

let buf = new Buffer(10)
console.log(buf);

{/* <Buffer 00 00 00 00 00 00 00 00 00 00>
(node:16756) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
(Use `node --trace-deprecation ...` to show where the warning was created) */}


// Buffer.alloc() --- 性能比new Buffer()强一点 --- 在堆里开辟一块儿空间（无人用过）
let buf2 = Buffer.alloc(10)
console.log(buf2)


// Buffer.allocUnsafe() --- 性能最好 --- 
// 1. 输出结果：输出的是16进制，存储的是二进制，输出的时候会自动转16进制
// 2. 在堆里开辟空间，可能残留着别人用过的数据，因此allocUnsafe
let buf3 = Buffer.allocUnsafe(10)
console.log(buf3)


// Buffer.from()
// 1. 输出的为啥不是字符串？因为用户存储的不一定是字符串，也可能是媒体文件
// 2. 如何把输出转为我们认识的？toString()
let buf4 = Buffer.from("hello atguigu")
console.log(buf4); // <Buffer 68 65 6c 6c 6f 20 61 74 67 75 69 67 75>
console.log(buf4.toString()); // hello atguigu