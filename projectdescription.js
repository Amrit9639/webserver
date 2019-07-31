const http = reqire('http');

function handler(req,res){
     res.writeHead (200, {'Content-type':'text/plain'});
}
const server = http.createServer(handler);

