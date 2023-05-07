// console.log("hello,world")
// // nodejs中不能使用BOM和DOM的api

// setTimeout(() => {
//     console.log("iloveyou")
// }, 1000);


// buffer(中文叫缓冲区)，类似于一个array对象，用于标识固定长度的字节序列，换句话说buffer就是一段固定长度的内存空间，用于处理二进制数据
// 1.buffer大小固定无法调整
// 2,。buffer性能好，可以直接对计算机内存进行操作
// 3.每个元素的大小为1字节

// 1.alloc。。。。。用该方法创建的对象内个二进制位都为0
let buf1 = Buffer.alloc(10);
console.log(buf1)
// 2.allocUnsafe........该方法不会清空之前内存空间中的数据，容易读脏数据
let buf2 = Buffer.allocUnsafe(10);
console.log(buf2)
// 3.from..........把每个字母转化为unicode中对应的数字
let buf3 = Buffer.from('hello');
console.log(buf3)
Buffer可能会出现移除的情况

let buf = Buffer.from('你好');
console.log(buf.toString());
console.log(buf[0].toString());
console.log(buf[0].toString(2));
buf[0] = 95
console.log(buf.toString())
console.log(buf);


