// 创建一个新文件
// 1.导入fs模块
const fs=require('fs');
// fs.writeFile('./文件1.txt','三人行必有我师',err=>{
//     if(err){
//         console.log('写入失败');
//         return;
//     }
//     console.log("写入成功");
// });

// 异步和同步
// writeFile属于异步进程，运行到writeFile时吧回调函数交给一个进程存入队列中然后继续运行下面的代码，队列到达该进程是才运行
// console.log("lasdasdas")
// 同步写入,同步函数没有回调函数，运行完之后才会继续执行下面的代码
// fs.writeFileSync('./data.txt','这是同步写入进程');

// 文件的追加写入
    // 异步追加
// fs.appendFile('./文件1.txt','择期善者而从之其不善者而改之',err=>{
//     if(err){
//         console.log('追加失败');
//         return;
//     }
//     console.log('追加成功');
// })
    // 同步追加
// fs.appendFileSync('./文件1.txt','\nasdasdasdasd');

// fs.writeFile也可以实现追加写入，在第三个参数option赋'a'
// fs.writeFile('./文件1.txt',"追啊追啊",{flag:'a'},err=>{
//     if(err){
//         console.log('写入失败');
//         return;
//     }
//     console.log("写入成功")
// })

// 第19集 文件流式写入






