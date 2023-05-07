const http = require('http');
const url = require('url')


const server = http.createServer((request,response)=>{

    // let body = '';
    // // 绑定事件
    // request.on('data',chunk=>{
    //     body += chunk;

    // })
    // // 绑定end事件   每个请求的回调函数中都必须要有end方法
    // request.on('end',()=>{
    //     console.log(body);
    //     response.end('htllo http')
    // })
    console.log(request.url)
    let res = url.parse(request.url,true)
    console.log(res)
    let pathname = res.pathname;
    console.log(pathname)
    console.log(res.search)

    response.end('url');

})

server.listen(9090,()=>{
    console.log('启动')
})