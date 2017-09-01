const express = require('express');
const bodyParser = require('body-parser');

//------------------------------------------------
const server = express();

server.use(bodyParser.json());       // to support JSON-encoded bodies
server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

server.all('*', function(req, res, next) {
	console.log('--------------------------------------------------------------');
	console.log('request from: ' + req.connection.remoteAddress);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//------------------------- GET -----------------------------------------
server.get( '/' , (req, res) => {
	console.log('first connection');
	console.dir(req);
	res.status('200').send({mess: 'hello from server. nextrequest should be to /second'});
});

server.listen(process.env.PORT || 4444);
