const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, (req, res) => {
  console.log(`server is running for http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello Node js...");
});

app.get("/about", (req, res) => {
  res.render("index");
});

app.get("/form", (req, res) => {
  res.render("form",{message : null});
});

app.post("/submit", (req, res) => {
  const name = req.body.myname;

  const message = `Hello, ${name} your sumbitted the form.`;
  res.render('form',{message : message});
});
