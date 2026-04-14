const express = require("express");
const app = express();
const PORt = 3000;

app.listen(PORt, () => {
  console.log(`Server is running on http://localhost:${PORt}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello, Node.js is running!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.get("/about/users", (req, res) => {
  res.send("<h1>Users Page</h1>");
});

app.get("/projects", (req, res) => {
  res.send("<h1>Projects Page</h1>");
});

app.get("/contact/:userid/book/:bookid", (req, res) => {
  // res.send(`<h1>Contact Page - ID: ${req.params.id}</h1>`)
  res.send(req.params);
});

app.get("/about/:userid/book/:bookid", (req, res) => {
  // res.send(`<h1>Contact Page - ID: ${req.params.id}</h1>`)
  res.send("User Id: " + req.params.userid);
});

app.get("/contact/:userid-:bookid",(req,res)=>{
    // res.send(`<h1>Contact Page - ID: ${req.params.id}</h1>`)
    res.send(req.params)
})

// Query Parameters
app.get('/search',(req,res)=>{
    res.send(req.query);
})