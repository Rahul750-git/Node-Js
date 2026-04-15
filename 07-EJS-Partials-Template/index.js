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
  res.render("about");
});

app.get("/form", (req, res) => {
  res.render("form",{message : null});
});

app.post("/submit", (req, res) => {
  const name = req.body.myname;

  const message = `Hello, ${name} your sumbitted the form.`;
  res.render('form',{message : message});
});
app.get("/about", (req, res) => {
    var users= [
    { name: "Ram",age:25 , city:"Delhi"},
    { name: "Shyam",age:23 , city:"New Delhi"},
    { name: "Mohan",age:26 , city:"Noida"},
    { name: "Sohan",age:27 , city:"Mumbai"},
    { name: "Mahesh",age:28 , city:"Goa"},
    ] 
  res.render("/about",
    {title : 'About Page' ,
     message:'Welcome to EJS!',
     items: users
    });
});
