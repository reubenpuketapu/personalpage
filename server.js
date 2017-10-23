var express = require('express');
var cors = require('cors')
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors())
app.use(express.static(__dirname));

var http = require('https');
var options = {
  host: 'v3kuyp3a8l.execute-api.ap-southeast-2.amazonaws.com',
  path: '/dev/eratosthenes/256?max=1000&loops=1'
};

app.get('/apigateway', function (oreq, ores) {
	var req = http.get(options, function(res) {
  console.log('STATUS: ' + res.statusCode);

  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...
    bodyChunks.push(chunk);
  }).on('end', function() {
    var body = Buffer.concat(bodyChunks);
    console.log('BODY: ' + body);
    
	ores.send('Output: ' +body)
	// ...and/or process the entire body here.
  })

});
})


app.listen(80);
