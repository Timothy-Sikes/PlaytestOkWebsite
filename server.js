var http = require('http');

var finalhandler = require('finalhandler');
var serverStatic = require('serve-static');

var serve = serverStatic('./content/static');
var port =  (process.env.PORT || 5000);


var server = http.createServer(function(req, res) {
    var done = finalhandler(req, res);
    serve(req, res, done);
})

server.listen(port);
