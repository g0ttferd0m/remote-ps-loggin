var http = require('http');

server = http.createServer(function (req, res) {
    console.dir(req.param);
    if(req.method == 'POST') {
        var body = '';
        req.on('data', function(data) {
            body += data;
        });
        req.on('end', function() {
            console.log('POST received: ');
            console.log(body);
        });
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('POST received');
    }
});
port = 8080;
host = '127.0.0.1';
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);