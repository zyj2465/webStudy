const http = require('http');

const server = http.createServer((req,res)=>{

    console.log('回调函数执行');

    // console.log(req.url)
    // console.log(req.method)
    // console.log(req.headers)
    // 设置响应头信息
    res.setHeader("Content-Type","text/html;charset=utf-8") 

    let url = new URL(req.url,'http://127.0.0.1');
    console.log(url);
    console.log(url.pathname);
    if(url.pathname == "/login" && req.method == "GET"){
        res.end("进入注册页面");

    }
    else if(url.pathname == "/register" && req.method == "GET"){
        res.end("注册页面");
    }
    else{
        res.end("<h1>404 not found</h1>")
    }

    // res.end('demo2')
})


server.listen(5555,()=>{
    console.log('开始监听5555端口')
})