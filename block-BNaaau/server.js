/*
  - parse the  request url using parse method from url module
  - console pathname from parsed url in above step
  - grab url using `req.url`
  - differentiate between `req.url` and `parsedUrl.pathname`
  - grab the email from query params
  - return json response with email from query params

  /users?email=nodeserver@gmail.com
*/



var http=require('http');
var server=http.createServer(handleRequest);
var fs=require('fs');
var url=require('url');

server.listen(2345,()=>console.log('server listening'));


function handleRequest(req,res){
    var urlInfo=url.parse(req.url,true);
    console.log(urlInfo.pathname);
    var email=urlInfo.query.email;
    res.setHeader('Content-type','application/json');
    res.write(urlInfo.query.email);
    res.end();
}



