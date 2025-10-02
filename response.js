const http = require('http');

var age = 19;
const server = http.createServer((req , resp)=>{
    resp.setHeader('Content-Type','text/html');
    resp.write("<h1>first response from node js server and the age is "+age+"</h2>");
    resp.end();
    process.exit();
}

)

server.listen(3000);