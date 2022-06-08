console.log('Welcome to Nodejs');

var os=require('os');
const { setTimeout } = require('timers');


let cpus=os.cpus().length;
let freeMem=os.freemem();
let uptime=os.uptime();
let version=os.version();

// console.log(cpus);
// console.log(freeMem);
// console.log(uptime);
// console.log(version);


/*Buffer*/

let buff1=Buffer.alloc(12);
buff1.write('Welcome to Buffer');
// console.log(buff1.toString());

/*Blocking and Unblocking code*/

/*Sync codes(core JS) are the blocking codes as they block the maiin V8 thread and does not allow further execution till the cureent execution is conplete*/


console.log('Synchronous code');
console.log('First');
console.time('Execution Time');
 
// task starts
for (var i = 0; i < 1000000000;i++);
// task ends
 
console.timeEnd('Execution Time');
console.log('Second');

/*Async codes are non-blocking codes and are executed in background by 4 seperate threads provided by the libuv library.Only once therir execution is completed
in background they are pushed to the callstack*/


console.log('Asynchronous code');
console.log('First');
setTimeout(()=>{console.log('Waiting for 3 seconds'),3000});
console.log('second');


/*HTTP Protocol*/
let url=require('url');
let parsedUrl=url.parse('https://airindia.com/fares/calculate?from=delhi&to=detroit',true);
console.log(parsedUrl.query,parsedUrl.pathname,parsedUrl.protocol);

