const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.set("view engine", "ejs");
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
// check protocol
// app.get('/about', (req, res) => {
//     res.send(req.protocol);
// });

// //check path only show router path
// app.get('/about', (req, res) => {
//     res.send(req.path);
// });

// //check hostname only show hostname for example (like, localhost:3000 show only)
// app.get('/about', (req, res) => {
//     res.send(req.hostname);
// });

//check secure protocol and show true and false
// app.get('/about', (req, res) => {
//     res.send(req.secure);
// });

//show route path with parameter
// app.get('/about/:userid', (req, res) => {
//     res.send(req.route);
// });

//show original url with query string with complete url like (http://localhost:3000/about?name=JohnDoe&age=30)
// app.get('/about', (req, res) => {
//     res.send(req.originalUrl);
// });

// show method  name like,Get,Post,Put,Delete etc
// app.get('/about', (req, res) => {
//     res.send(req.method);
// });

// app.get("/about", (req, res) => {
//   if (req.accepts("html")) {
//     res.send("<h1>HTML response</h1>");
//   } else if (req.accepts("json")) {
//     res.send({ message: "JSON response" });
//   } else if (req.accepts("xml")) {
//     res.send("<message>xml response</message>");
//   } else {
//     res.send("Content type not supported");
//   }
// });

// complete server information with headers and other information
// app.get("/about", (req, res) => {
//     res.send(req.headers);
// });

// show one header information for example (host: localhost:3000) with get method
// app.get("/about", (req, res) => {
//     res.send(req.get("host"));
// });

//
app.post("/about", (req, res) => {
  if (req.is("application/json")) {
    res.send("Valid json Data");
  } else if (req.is("text/html")) {
    res.send("Valid Html data");
  } else {
    res.status(400).send("Unsupported content-type");
  }
});
