//var sys = require("sys");
var sys = require("util")
var http = require("http");
http.createServer(function(request, response) {
 //   response.sendHeader(200, {"Content-Type": "text/html"});
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write("Hello World!");
 //   response.close();
    response.end();
}).listen(80);
sys.puts("Server running at http://localhost:80/");