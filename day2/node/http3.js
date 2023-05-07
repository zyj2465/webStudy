const http = require('http');

const server = http.createServer((req,res)=>{
    res.statusCode = 200;

    res.setHeader('myHeader','testtesttest')

    res.end('response');

})

server.listen(9000,()=>{
    console.log('服务已启动')
})