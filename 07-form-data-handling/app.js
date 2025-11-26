// form submission in js
const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

http.createServer((req, res) => {

    // ------------------------------  
    // MARKING: Home Route (Correct)
    // ------------------------------
    if (req.url === '/') {
        fs.readFile('./form.html', 'utf-8', (error, data) => {
            if (error) {
                res.writeHead(500, { 'content-type': 'text/plain' });
                return res.end('error.......');  // ✔️ correct
            }
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);  // ✔️ correct
        });
    }

    // ------------------------------  
    // MARKING: Submit Route (Problem Fixed)
    // ------------------------------
    else if (req.url === '/submit' && req.method === 'POST') {

        let bodyChunks = [];

        req.on('data', chunk => {
            bodyChunks.push(chunk);
        });

        req.on('end', () => {
            let rawData = Buffer.concat(bodyChunks).toString();
            let formData = queryString.parse(rawData);

            console.log("Form Data:", formData);

            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(`<h1>Form Submitted Successfully!</h1>`);  // ✔️ correct
        });
    }

    // ------------------------------  
    // MARKING: 404 Route
    // ------------------------------
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.end('<h1>404 Page Not Found</h1>');  // ✔️ correct
    }

}).listen(4000);

/*
// form submission in js
const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
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
                res.write('<h1>Form is Submitted......</h1>');
               // collecting form data in chunks(default)
               const dataBody = [];
               req.on('data',(chunk)=>{
                  dataBody.push(chunk);
               })
              // processing and converting collected chunks into readable form
              req.on('end',()=>{
                let rawData = Buffer.concat(dataBody).toString();
                let formData = queryString.parse(rawData);
                console.log(formData);
              })
             }
             else{
                res.write('<h1>404 page not found</h1>');
                res.end();
             }
         }
         res.end();
    })
}).listen(4000);
*/