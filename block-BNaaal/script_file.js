var http=require('http');

var server=http.createServer(handleRequest);
server.listen(4000,'localhost',()=>console.log('Server started'));

function handleRequest(req,res){
    res.end('Welcome to Localhost 4000');
}