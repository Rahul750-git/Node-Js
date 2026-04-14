const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.set ("view engine", "ejs");
// app.get("/", (req, res) => {
//   // send method is used to send the text ,HtML tag,object,Array ,Buffers etc as a response to the client
//   res.send("<h1>Hello, Node.js is running!</h1>");
// });

// object for JSON format
app.get("/about", (req, res) => {
  res.send({
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    city: "New York",
  });
});

// Array 
app.get("/users", (req, res) => {
  res.send(["Ram", "shyam", "Mohan", "Sohan", "Ramesh"]);
});

// JSON
app.get("/", (req, res) => {
  res.send({
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    city: "New York",
  });
});

//array of objects
app.get("/products", (req, res) => {
    const products = [
        { id: 1, name: "Product 1", price: 10.99 },
        { id: 2, name: "Product 2", price: 19.99 },
        { id: 3, name: "Product 3", price: 5.99 },
        ];
    res.json(products);
});

//redirect method 
app.get("/old-page",(req,res)=>{
    res.redirect(301,"https://www.google.com");
})

app.get("/new-page",(req,res)=>{
    res.send("<h1>This is a new page</h1>")
})

//render method
app.get("/index",(req,res)=>{
    res.render("index",)
})

//Download method

app.get("/download",(req,res)=>{
    res.download("./files/Get_Started.pdf","Document.pdf",)

})
 // sendFile method
app.get("/sendfile",(req,res)=>{
    res.sendFile(__dirname + "/files/Get_Started.pdf",{filename: "Document.pdf"})
})

// end method
app.get("/end",(req,res)=>{
    res.write("This is Testing");
    res.end()
});

// sendStatus method
app.get("/error",(req,res)=>{
    res.sendStatus(200);
});

app.get("/check",(req,res)=>{
    console.log(res.headersSent); 
    res.send("Check route response");
    console.log(res.headersSent);
});

// set method
app.get("/set",(req,res)=>{
    res.set("Custom-Header","This is a custom header value");
    console.log(res.get("Custom-Header"));
    res.send("Custom header set successfully");
})