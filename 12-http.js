const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is the home page");
  } else if (req.url === "/about") {
    res.end("this is the about page");
  } else if (req.url === "/createAccount") {
    res.end("user created");
  } else {
    // Handle the case where the page does not exist
    fs.readFile("./404.html", (err, data) => {
      res.statusCode = 404;
      res.end(data);
    });
  }
});

server.listen(3000, () => {
  console.log("server is running at port", 3000);
});
