// path module and global object
const path = require('path');
const file = './file1.txt';

console.log(path.extname(file)); // .txt
console.log(path.dirname(file)); // .
console.log(path.basename(file)); // file1.txt

console.log(__dirname); // 
console.log(__filename); // 


