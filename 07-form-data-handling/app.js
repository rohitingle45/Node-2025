const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {
        fs.readFile('./form.html', 'utf-8', (error, data) => {
            if (error) {
                res.writeHead(500, { 'content-type': 'text/plain' });
                return res.end('error.......');
            }
            res.writeHead(200, { 'content-type': 'text/html' });
            return res.end(data);   // ❗ MUST return
        });
        return; // ❗ prevent going ahead
    }

    // ------------------------------  
    // Submit Route
    // ------------------------------
    if (req.url === '/submit' && req.method === 'POST') {
        let body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            let raw = Buffer.concat(body).toString();
            let formData = queryString.parse(raw);

            console.log("Form Data:", formData);

            res.writeHead(200, { 'content-type': 'text/html' });
            return res.end(`<h1>Form Submitted</h1>`);
        });
        re
        
    }

    // ------------------------------  
    // 404
    // ------------------------------
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end('<h1>404 Page Not Found</h1>');

}).listen(4000);
