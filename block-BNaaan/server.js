let http=require('http');

var server=http.createServer(handleRequest);
server.listen(3000,'localhost',()=>console.log('Server'));

function handleRequest(req,res){
    console.log('Request Object Method:',req.method);
    console.log('Request Object url:',req.url);
    console.log('request Object Header:',req.headers);
    res.end('Welcome!!!');
}