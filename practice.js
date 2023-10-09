const http = require("node:http");
const fs = require("node:fs");

const hostname = "localhost";
const PORT = "8000";
const server = http.createServer((req, res) => {
  // res.end('Hello World!')
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  }).end('Hello World')
  console.log(req.url);
});

server.listen(
  PORT,
  hostname,
  console.log(`Server is running on ${hostname}:${PORT}`)
);
