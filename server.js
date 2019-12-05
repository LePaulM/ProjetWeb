var fs   = require('fs');
var fileType = require(file.type);
var server = fileType.createServer((req, res) => {
  fs.readFile(__dirname + __filename + '.' + __file.type, (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading file');
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(port,'127.0.0.1');
/*var http = require('http').createServer((req, res) => {
  fs.readFile(__dirname + __filename + '.http', (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading http file');
    }
    res.writeHead(200);
    res.end(data);
  });*/
    function sendError(errCode, errString, response)
    {
      response.writeHead(errCode, {"Content-Type": "text/plain"});
      response.write(errString + "\n");
      response.end();
      return;
    }
    
    function sendFile(err, file, response)
    {
      if(err) return sendError(500, err, response);
      response.writeHead(200);
      response.write(file, "binary");
      response.end();
    }
    
    function getFile(exists, response, localpath)
    {
      if(!exists) return sendError(404, '404 Not Found', response);
      fs.readFile(localpath, "binary",
       function(err, file){ sendFile(err, file, response);});
    }
    
    function getFilename(request, response)
    {
      var urlpath = url.parse(request.url).pathname; // following domain or IP and port
      var localpath = path.join(process.cwd(), urlpath); // if we are at root
      fs.exists(localpath, function(result) { getFile(result, response, localpath)});
    }
