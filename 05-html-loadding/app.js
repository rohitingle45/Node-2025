// loadding html file in node.js (js) file
const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    fs.readFile('./index.html','utf-8',(error,data)=>{
        if(error){
            res.writeHead(500,{'content-type':'text/plain'});
            res.write('error is ocuur.....');
            res.end();
            return;
        }
        else{
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end();
        }
    })
}).listen(4000);