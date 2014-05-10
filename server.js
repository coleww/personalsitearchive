var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var staticIO = require('node-static');
var createConductor = require('./lib/conductor.js').createConductor;

var staticServer = new staticIO.Server("./public");

var server = http.createServer(function(request, response) {
  staticServer.serve(request, response);
});

createConductor(server, 160);

server.listen(8000);

console.log('Server running at 8000');

