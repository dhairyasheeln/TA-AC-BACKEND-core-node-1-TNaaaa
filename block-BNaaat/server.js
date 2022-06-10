var http=require('http');
const path = require('path');
var url=require('url');
var fs=require('fs');

var server=http.createServer(handleRequest);
server.listen(5555,()=>console.log('Server Start'));

function handleRequest(req,res){
    let urlInfo=url.parse(req.url,true);
    let pathname=urlInfo.pathname;

    console.log(pathname);

    if(req.method==='GET' && pathname==='/file'){
        fs.readFile('./node.html',(err,content)=>{
            res.write(content);
            res.end();
        });
    }
    else if(req.method==='GET' && pathname==='/stream'){
        fs.createReadStream('./node.html').pipe(res);
    }
}