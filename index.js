var http = require("http"); 
var fs = require('fs');
var querystring = require('querystring');
var mod = require('./mod.js');

http.createServer((req,res) => {
  let url = req.url.split("?");  
  let query = querystring.parse(url[1]); 
  let path = url[0].toLowerCase();

switch(path)
{
    case '/':
    fs.readFile('./public/home.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
      break;

    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('about page');
      break;
c
    case '/getall':
      fs.readFile('mod.js', function(err, data) 
      {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(JSON.stringify(mod.getAll()));
        res.end();
      });
    break;

    case '/get':
      fs.readFile('mod.js', function(err, data) 
      {
        let found = mod.get(query.brand)
        res.writeHead(200, {'Content-Type': 'text/html'});
        if(!found)
        {
          results = 'Object not found!';
        }
        else
        {
          results = JSON.stringify(found);
        }
        res.end(results);
      });
      break;
    
    case '/delete':
      fs.readFile('mod.js', function(err, data)
      {
        let found = mod.delete(query.brand)

        res.writeHead(200, {'Content-Type': 'text/html'});
        if(found === -1)
        {
          results = 'Object not found!';
          res.end('Not Found')
        }
        else
        {
           results = JSON.stringify(found);
           res.end('removed ' + query.brand);
           
        }
        
      });
      break;
    
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
}
}).listen(process.env.PORT || 3000);