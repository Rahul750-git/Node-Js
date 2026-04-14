const express = require("express");
const app = express();

const PORT = 3000;
app.set("view engine", "ejs");

app.listen(PORT, (req, res) => {
  console.log(`Server is running for http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

// app.get("/about", (req, res) => {
//   res.render("index");
// });

// app.get("/about", (req, res) => {
//     let items= ['Apple','Banana','Cherry','Grapes'] 
//   res.render("index",
//     {title : 'About Page' ,
//      message:'Welcome to EJS!',
//      items
//     });
// });

app.get("/about", (req, res) => {
    var users= [
    { name: "Ram",age:25 , city:"Delhi"},
    { name: "Shyam",age:23 , city:"New Delhi"},
    { name: "Mohan",age:26 , city:"Noida"},
    { name: "Sohan",age:27 , city:"Mumbai"},
    { name: "Mahesh",age:28 , city:"Goa"},
    ] 
  res.render("index",
    {title : 'About Page' ,
     message:'Welcome to EJS!',
     items: users
    });
});
