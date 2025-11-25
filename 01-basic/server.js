// creating our first server by using node js
const http = require('http');
http.createServer((req,res)=>{
     res.write('<h1>Hello, Rohit Ingle!</h1>');
     res.end('server closed.....');
}).listen(4800);