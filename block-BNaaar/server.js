var http=require('http');
const path = require('path');
var url=require('url');

var server=http.createServer(handleRequest);
server.listen(5000,()=>console.log('Server Starting.'));

function handleRequest(request,response){
    var urlInfo=url.parse(request.url,true);
    var pathname=urlInfo.pathname;

    if(request.method==='GET' && pathname==='/'){
        response.setHeader('Content-Type','text/plain');
        response.write('Welcome to homepage');
        response.end();
    }
    else if(request.method==='GET' && pathname==='/about'){
        response.setHeader('Content-Type','text/html');
        response.write('<h2>this is all about NodeJS</h2>');
        response.end();
    }

    else if(request.method==='POST' && pathname==='/about'){
        response.setHeader('Content-Type','json');
        response.write('{message: this is a post request}');
        response.end();
    }
    else{
        response.setStatus=400;
        response.write('Page not found!!');
        response.end();
    }
}