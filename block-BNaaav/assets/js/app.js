var http=require('http');
var fs=require('fs');
var path=require('path');



var server=http.createServer(handleRequest);
server.listen(8000,()=>{console.log('Server started!!')});

function handleRequest(req,res){
    console.log(req.url);
    res.setHeader('Content-type','text/html');


    /*Index Page*/

    if(req.method==='GET' && req.url==='/'){
        console.log('index file');
        // fs.readFile('/home/dhairyasheel/TA-AC-BACKEND-core-node-1-TNaaaa/block-BNaaav/index.html',(err,content)=>{
        //     res.write(content);
        //     res.end();
        // });
        fs.createReadStream('/home/dhairyasheel/TA-AC-BACKEND-core-node-1-TNaaaa/block-BNaaav/index.html').pipe(res);
        
    }

    /*Gallery Page*/

    else if(req.method==='GET' && req.url==='/gallery'){
        fs.readFile('/home/dhairyasheel/TA-AC-BACKEND-core-node-1-TNaaaa/block-BNaaav/gallery.html',(err,content)=>{
            res.write(content);
            res.end();
        });
    }

    else if(req.url==='/gallery.html'){
        fs.readFile('/home/dhairyasheel/TA-AC-BACKEND-core-node-1-TNaaaa/block-BNaaav/gallery.html',(err,content)=>{
            res.write(content);
            res.end();
        });
    }

    /*CSS Internal call by server*/

    else if (req.url.split(".").pop() === "css") {
        console.log('CSS called');
        // set header for css file
        res.setHeader("Content-Type", "text/css");
        // read css file and send it in response
        var cssPath=path.join(__dirname,'..','/stylesheets');
        fs.readFile(cssPath+req.url, (err, content) => {
          if (err) return console.log(err);
          res.end(content);
        });
      }

      /*Image call br Server*/


      else if (req.url.split(".").pop() === "png" || req.url.split(".").pop() === "jpg") {
        console.log('Image called');
        // set header for css file
        res.setHeader("Content-Type", "text/css");
        // read css file and send it in response
        var cssPath=path.join(__dirname,'..','/media');
        fs.readFile(cssPath+req.url, (err, content) => {
          if (err) return console.log(err);
          res.end(content);
        });
      } 
    }  
    
  