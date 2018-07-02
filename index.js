var http = require("http"); 
var fs = require('fs');
var mod = require('./mod.js');



http.createServer(function(req,res) {
  var path = req.url.toLowerCase();

  switch(path) {
    case '/getall':
    fs.readFile('mod.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(mod.getAll(surfboards));
        res.end();
        });
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About page');
      break;
    case '/':
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Home page');
    break;  
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
    }
}).listen(process.env.PORT || 3000);