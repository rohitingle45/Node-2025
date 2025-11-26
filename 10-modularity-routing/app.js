// modularity and routing in node.js
const http = require('http');
const userForm = require('./userForm.js');
const formSubmit = require('./formSubmit.js');
http.createServer((req,res)=>{
   res.writeHead(200,{ 'content-type':'text/html' });
   if(req.url == '/'){
     userForm(req,res);
   }
   else if(req.url == '/submit'){
     formSubmit(req,res);
   }
   res.end();
}).listen(4000,()=>{
    console.log('http://localhost:4000/');
    
});