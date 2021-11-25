/* 
setImmediate: 设置立即执行函数
setInterval: 设置循环定时器
setTimeout: 设置定时器

clearImmediate: 清除立即执行函数
clearInterval: 清除循环定时器
clearTimeout: 清除定时器
*/

/* 
第一个阶段： timer
[定时器阶段 - setTimeout,setInterval]
    1. 开始计时
    2. 执行定时器的回调

第二个阶段： pending callbacks
[系统阶段]

第三个阶段： idle,prepare
[准备阶段]

第四个阶段： poll
[轮询阶段，核心]
    --- 1如果回调队列里有待执行的回调函数，
      从回调队列中取出回调函数，同步执行（一个个执行），
      直到回调队列为空s或道达系统最大限度
    --- 2如果回调队列为空，
      ---2.1 若有设置过setImmediate，进入下一个check阶段（目的：为了执行setImmediate的回调）
      ---2.2 若未设置过setImmediate
          --- 在此阶段停留，等待回调函数被插入回调队列
          --- 若定时器到点了，进入下一个check阶段，（目的：走五、六阶段，随后走第一阶段）

第五个阶段： check
[专门用于执行setImmediate所设置的回调]

第六个阶段： close callbacks
[关闭回调阶段]


process.nextTick() -- 用于设置立即执行函数（“氪金玩家”-任意阶段优先执行，除了主线程）
 */

// 定时器
setTimeout(() => {
  console.log('我是setTimeout指定的回调')
});

// 立即执行函数（回调 callback）
setImmediate(()=>{
  console.log('我是setImmediate指定的回调')
})

// 立即执行函数
// process.nextTick(()=>{
//   console.log('process.nextTick指定的回调')
// })

console.log('我是主线程上的代码');

// 我是主线程上的代码
// process.nextTick指定的回调
// 我是setTimeout指定的回调
// 我是setImmediate指定的回调