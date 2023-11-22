const http = require('http');
const fs = require('fs');

// HTTP => request response

http.createServer((request,response)=>{
    const file = request.url == '/' ? './WWW/index.html' : `./WWW/${request.url}`
    fs.readFile(file,(err, data)=>{
        if(err){
            response.writeHead(404,{"Content-Type":"text/plain"})
            response.write("NOT FOUND");
            response.end();
        }
        else{
            const extension = request.url.split('.').pop();
            switch(extension){
                case 'txt':
                    response.writeHead(200,{"Content-Type":"text/plain"});
                    break;
                case 'html':
                    response.writeHead(200,{"Content-Type":"text/html"});
                    break;
                case 'css':
                    response.writeHead(200,{"Content-Type":"text/css"});
                    break;
                case 'js':
                    response.writeHead(200,{"Content-Type":"text/js"});
                    break;
                case "png":
                    response.writeHead(200,{"Content-Type":"image/png"});
                    break;
                case "jpeg":
                    response.writeHead(200,{"Content-Type":"image/jpeg"});
                    break;
                default:
                    response.writeHead(200,{"Content-Type":"text/plain"});
                    break;
            }
            response.writeHead(200,{"Content-Type":"text/html"})
            response.write(data);
            response.end();
        }
    })
}).listen(4444);