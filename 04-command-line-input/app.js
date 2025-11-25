// taking and manipulating cmd values.....
const http = require('http');
const cmdIp = process.argv;
const port = cmdIp[2];
http.createServer((req,res)=>{
    res.write('cmd.....');
    res.end();
}).listen(port);