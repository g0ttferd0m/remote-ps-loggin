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
server.listen(process.env.PORT || 8080);
console.log('Listening at http://' + process.env.HOST + ':' + process.env.PORT);