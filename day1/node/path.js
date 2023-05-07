const fs = require('fs')
const path = require('path')

// __dirname:输出绝对路径
console.log(__dirname);

// fs.writeFile(__dirname+'/index.html','love',err=>{
//     if(err){
//         console.log('回调失败')
//         return;
//     }
//     console.log('回调成功')
// })

console.log(path.resolve(__dirname, './index.html'));
console.log(path.resolve(__dirname, 'index.html'));

// sep 获取当前操作系统的路径分隔符
console.log(path.sep);

// __filename:当前文件的绝对路径
// __dirname:当前文件所在的文件夹的绝对路径
console.log(__filename)
console.log('------------------------------')
let str = 'D:\\code\\working\\web\\day1\\node\\path.js'
console.log('parseAPI')
console.log('------------------------------')
console.log(path.parse(str))



console.log(path.basename(str))
 
// 获取路径的目录名
console.log(path.dirname(str))

// 获取路径的拓展名
console.log(path.extname(str))


