const http = require('http');
const url = require('url')


const server = http.createServer((request,response)=>{
    // 新建一个对象
    // let url = new URL(request.url,'http://www.xxx.com');
    console.log(request.url)
    // console.log(url)


    response.end('url new')
})

server.listen(9090,()=>{
    console.log('启动')
})