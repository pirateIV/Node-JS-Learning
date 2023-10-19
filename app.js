// npm - global command
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency
// npm install -g <packageName>
// sudo install -g <packageName>  (mac)

// package json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// const http = require('node:http')
import http from 'node:http'

http.createServer((req, res)=> {
  res.writeHead(200, { 'Content-Type': 'application/json'  });
  res.end(JSON.stringify({
    data: 'Hello World',
  }))
})

// import http from 'node:http';

// Create a local server to receive data from
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!',
//   }));
// });

// server.listen(8000);
// import http from 'node:http';

// // Create a local server to receive data from
// const server = http.createServer();

// // Listen to the request event
// server.on('request', (request, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!',
//   }));
// });

// server.listen(8000);