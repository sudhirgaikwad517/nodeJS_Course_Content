const http = require('http');

http.createServer((req , resp)=>{
    resp.write("Hello , world");
    resp.end();
}).listen(8000);

console.log("Server is running on port 8000"); //printing the output on the console or to display the outpyt we use the cosnole.log function .