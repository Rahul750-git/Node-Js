const express = require("express");
const cookieparser = require("cookie-parser");
const userModal = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 3000;
const path = require("path");


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieparser());

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(PORT, (res, req) => {
  console.log(`Server is running http://localhost:${PORT}`);
});
app.post("/create", (req, res) => {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let createduser = await userModal.create({
        username,
        email,
        password: hash,
        age,
      });
      let token = jwt.sign({ email }, "sssssssssss");
      res.cookie("token", token);
      res.send(createduser);
    });
  });
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {

  let user = await userModal.findOne({ email: req.body.email });
  if (!user) return res.send("Something is Wrong");

  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: user.email }, "sssssssssss");
      res.cookie("token", token);
      res.send("Login Successfully");
    }
      else {
        res.send("Something is Wrong");
      }
    });
  
});
app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});
