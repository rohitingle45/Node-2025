// response in detail
const http = require('http');
const name = 'Rohit Ingle';
const server = http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html"); // setting content type in header
    resp.write(`
               <h2>My Name is ${name}</h2>
               <h2>Today Time is ${new Date()}</h2>
        `)
    resp.end('request is closed'); // current request is closed 
    process.exit(); // server is closed 
})

server.listen(4800,()=>{
    console.log('http://localhost:4800');
    
})