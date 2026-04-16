const express = require("express");
const app = express();
const PORT = 3000;

//Middleware
app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.listen(PORT, (req, res) => {
  console.log(`Server is running for http://localhost:${PORT}`);
});

// app.get("/", (req, res) => {
//   res.send("Hello, node js...");
// });


//Routes

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/show-contact", (req, res) => {
   res.render("show-contact");
});

app.get("/add-contact", (req, res) => {
  res.render("add-contact");
});

app.post("/add-contact", (req, res) => {
  res.render("add-contact");

});

app.get("/update-contact", (req, res) => {
  res.render("update-contact");

});

app.post("/update-contact", (req, res) => {
  res.render("update-contact");
});

app.get("/delete-contact", (req, res) => {
  res.render("delete-contact");
});



