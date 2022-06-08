var url=require('url');

const parsedUrl=url.parse('https://blog.altcampus.io:80/students/register?name=altcampus&gender=male',true);
console.log("Pathname",parsedUrl.pathname);
console.log("Query",parsedUrl.query);
console.log("Host",parsedUrl.host);
console.log("Protocol",parsedUrl.protocol);