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
            return res.end(data);
        });
        return;
    }

    if (req.url === '/submit' && req.method === 'POST') {
        let body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            let raw = Buffer.concat(body).toString();
            let formData = queryString.parse(raw);

            console.log("Form Data:", formData);

            // write file first, then send response
            fs.writeFile('./file1.txt', formData.username, 'utf-8', (err) => {
                if (err) {
                    console.log('Error writing file', err);
                    res.writeHead(500, { 'content-type': 'text/plain' });
                    return res.end('Error writing file');
                }

                console.log('File created successfully');

                // now send response
                res.writeHead(200, { 'content-type': 'text/html' });
                return res.end(`<h1>Form Submitted and File Created</h1>`);
            });
        });
        return;
    }

    // 404
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end('<h1>404 Page Not Found</h1>');

}).listen(4000, () => console.log('Server running on port 4000'));
