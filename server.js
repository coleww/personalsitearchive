var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var staticIO = require('node-static');

var staticServer = new staticIO.Server("./public");

var server = http.createServer(function(request, response) {
  staticServer.serve(request, response);
});

server.listen(8000);

console.log('Server running at 8000');

