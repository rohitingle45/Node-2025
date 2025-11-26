// sync vs async programming in node.js

// sync programming......
console.log('Task1 Executes.....');
console.log('Task2 Executes.....');
console.log('Task3 Executes.....');
console.log('============================');

// async programming......
console.log('Task1 Executes.....');
setTimeout(()=>{
    console.log('Task2 Executes.....');
},2000);
console.log('Task3 Executes.....');