// learning simple api building in node.js
const http = require('http');
const userData = [
    {
        name:'Rohit Ingle',
        age:23,
        city:'Akola'
    },
     {
        name:'Divya Ingle',
        age:22,
        city:'Valsad'
    },
     {
        name:'Yogesh Ingle',
        age:20,
        city:'Akola'
    }
]
http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify(userData));
    res.end();
}).listen(4800)
