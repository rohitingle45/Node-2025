// performing crud operation on file system .....
const fs = require('fs');

// write operation on file
/*
fs.writeFileSync('./writeFile1.txt','this is writeFile1 content');
console.log('file is created');
*/
// read operation on file
/*
const data = fs.readFileSync('./writeFile1.txt','utf-8');
console.log(data);
*/
// delete operation on file
/*
fs.unlinkSync('./deleteFile.txt');
console.log('file deleted.....');
*/
// update file
fs.appendFileSync('writeFile1.txt',' \nthis is new and fresh content');
console.log('file updated successfully......');
