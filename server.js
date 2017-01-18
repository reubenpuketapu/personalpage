var http = require('http'),
    fs = require('fs');

http.createServer(function (req, res) {

    if(req.url.indexOf('.html') != -1){ //req.url has the pathname, check if it conatins '.html'

      fs.readFile(__dirname + 'index.html', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });

    }

    if(req.url.indexOf('.js') != -1){ //req.url has the pathname, check if it conatins '.js'

      fs.readFile(__dirname + 'js/index.js', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });

    }

    // if(req.url.indexOf('.sass') != -1){ //req.url has the pathname, check if it conatins '.css'

    //   fs.readFile(__dirname + 'style.sass', function (err, data) {
    //     if (err) console.log(err);
    //     res.writeHead(200, {'Content-Type': 'text/x-sass'});
    //     res.write(data);
    //     res.end();
    //   });

    // }

}).listen(80);