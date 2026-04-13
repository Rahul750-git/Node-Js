const http = require("http");

const server = http.createServer(function (req, res) {
  console.log(req);
 console.log(req.url ,req.method, req.headers);
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
