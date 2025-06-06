// app.js (send Hello World as an <h1> heading)
var http = require("http");
const port = process.env.PORT || 3001;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    // wrap the text in an <h1> (or <strong>) so it’s bold/large
    res.end("<h1>Hello World!</h1>");
  })
  .listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });