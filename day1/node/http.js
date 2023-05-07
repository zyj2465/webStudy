const { checkPrimeSync } = require('crypto');
const http = require('http');
// 创建服务对象
// request是浏览器发出请求包的封装对象
// response是服务器发出响应包的封装对象
// 服务器收到http请求的时候响应回调函数
const server = http.createServer((request,Response)=>{
    // response.end('hello http server');
    Response.setHeader('content-type','text/html;charset=utf-8');
    // // end设置响应体,end只能响应一次，不然会报错
    // console.log('响应')
    // Response.end("hello 9000 \n地址："+__dirname)
    console.log(request.method);
    console.log(request.url);
    console.log(request.httpVersion);
    console.log(request.headers);
    console.log(request.headers.host);

    // console.log(require('url').parse(request.url).pathname)
    Response.end("你好")

});

server.listen(9000,()=>{
    console.log("服务已启动，监听9000端口中")
    console.log(__dirname)
})