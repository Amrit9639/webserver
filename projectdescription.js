const http = require('http');
const url = require('url');
function handler(req,res){
    const parseUrl=url.parse(req.url,true);
    if(parsedUrl.pathname === '/'){
    
     res.writeHead (200, {'Content-type':'text/plain'});
     res.write('hello, I am a webserver!')
    res.write('yeah, Go webserver!')
    res.end();
} else {
     res.writeHead (404, {'Content-type':'text/plain'});
}
     console.log(parseUrl);

}
 
const server = http.createServer(handler);
 
 server.listen(3000);