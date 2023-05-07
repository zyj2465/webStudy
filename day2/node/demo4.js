// 搭建 HTTP 服务，响应一个 4 行 3 列的表格，并且要求表格有 `隔行换色效果` ，且 `点击` 单元格能 `高亮显示`

const http = require('http');
const fs = require('fs');

const server = http.createServer((request,response)=>{
    // 设置响应头
    response.setHeader('content-type','text/html;charset=utf-8')
    let ht = fs.readFileSync(__dirname + '/home.html')
    console.log(ht);
    response.end(ht)
})
server.listen(9000,()=>{
    console.log('建立9000端口监听！！！！！！');
})