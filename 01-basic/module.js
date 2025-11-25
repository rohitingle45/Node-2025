// core module and global object in node js
const os = require('os');
const {log} = require('console');
console.log(os.hostname());
console.log(process.pid);
log('custom log');
