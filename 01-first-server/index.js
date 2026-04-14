const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on is http://localhost:${PORT}`);
});


app.get("/", (req, res) => {
  res.send("<h1>Hello, Node.js is running!</h1>");
});


