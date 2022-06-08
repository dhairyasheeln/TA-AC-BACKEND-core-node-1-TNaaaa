var fs=require('fs');

fs.readFile('./index.md',(err,content)=>{
    console.log(err,content.toString());
});

var buff1=Buffer.alloc(10);
buff1.write('Welcome to Buffer');
console.log(buff1.toString());