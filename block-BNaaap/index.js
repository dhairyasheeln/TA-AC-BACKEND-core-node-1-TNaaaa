var http=require('http');

var server=http.createServer(handleRequest);
server.listen(3000,'localhost',()=>{console.log('Server Listening on port 3000')});

function handleRequest(request,response){
        response.setHeader('Content-Type','text/html');
        response.statusCode=201;
        response.write('<h1>Welcome to Node</h1>');
        response.end();
}