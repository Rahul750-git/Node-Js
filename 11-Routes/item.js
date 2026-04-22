const express = require("express");
const app = express();


// router.listen(PORT, (req, res) => {
//   console.log(`Server is running http://localhost:${PORT}`);
// });

app.get("/", (req, res) => {
  // res.sendFile ('./index.html',{root:__dirname});
  res.send("Got a GET Request");
});
app.post("/items", (req, res) => {
  res.json({ x: 1, y: 2, z: 3 });
});

app.put("/items/:id", (req, res) => {
  res.send("Got a PUT Request");
});

app.delete("/items/:id", (req, res) => {
  res.send("Got a DELETE Request");
});


