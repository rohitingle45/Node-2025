// form submission in js
const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    fs.readFile('./form.html','utf-8',(error,data)=>{
        if(error){
            res.writeHead(500,{'content-type':'text/plain'});
            res.end('error.......'); 
            return;      
         }
         else{
              res.writeHead(200,{'content-type':'text/html'});
             if(req.url == '/'){
               res.write(data);
             }
             else if(req.url == '/submit'){
               res.write('Form is Submitted......');
             }
             else{
                res.write('<h1>404 page not found</h1>');
             }
             res.end();
         }
    })
}).listen(4000);