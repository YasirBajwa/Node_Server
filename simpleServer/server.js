const http = require('http');

const hostname = '127.0.0.1';
//host name is optional
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //status code 200 means everything is ok.
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
