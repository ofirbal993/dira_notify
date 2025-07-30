// server.js
const http = require('http');

const hostname = '127.0.0.1'; // or '0.0.0.0' to accept external requests
const port = 10000;

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Node.js server!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
