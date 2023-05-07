const http = require('http');


const server = http.createServer((request,response)=>{

    // 获取请求方法
    let method = request.method;
    // console.log(method)
    // let pathname = new URL(request.url,'http://127.0.0.1');

    // console.log(request.url)
    // console.log(pathname)

    console.log(request.url)

    response.end("demo1")
})

server.listen(5050,()=>{
    console.log('5050已启动')
})