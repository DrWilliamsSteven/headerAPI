
var express = require("express");
var http = require("http");
var url = require("url");
var path = require("path");

var app = express();

var result;

app.use(function(request, response, next) {
    
  console.log("In comes a " + request.method + " to " + request.url);
  result = {
            ipaddress: request.headers['x-forwarded-for'],
            language: request.headers['accept-language'].split(',')[0], 
            software: request.headers['user-agent']
            }
            console.log(result)
  next();
    
});

// Send "timestamp result"
app.use(function(request, response) {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(result));
});
 app.listen(8080);


