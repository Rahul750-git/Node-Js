const express = require("express");
const app = express();
const userModal = require("./models/user");
const postModal = require("./models/post");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("./models/user");
const post = require("./models/post");

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/register", async (req, res) => {
  let { email, password, username, name, age } = req.body;
  let user = await userModal.findOne({ email: req.body.email });
  if (user) return res.status(500).send("User already registered");

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await userModal.create({
        username,
        email,
        name,
        password: hash,
        age,
      });

      let token = jwt.sign({ email: email, userid: user._id }, "ssssssssssss");
      res.cookie("token", token);
      res.send("registered");
    });
  });
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;

  let user = await userModal.findOne({ email });
  if (!user) return res.status(500).send("SomeThing Went Wrong");

  bcrypt.compare(password, user.password, function (err, result) {
    if (result) {
      let token = jwt.sign({ email: email, userid: user._id }, "ssssssssssss");
      res.cookie("token", token);
      res.status(200).redirect("/profile")
    } else{
       res.redirect("/login");
    }
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "").redirect("/login");
});

app.get("/profile",isLoggedIn, async (req, res) => {
  let user = await userModal.findOne({email: req.user.email })
  user.populate("posts")
  res.render('profile',{user})
});

app.get("/post",isLoggedIn, async (req, res) => {
  let user = await userModal.findOne({email: req.user.email })
  let {content} = req.body


 let post = await postModal.create({
    user: user._id,
    content 
  })
 

  user.post.push(post._id)
 await user.save()
 res.redirect('/profile')
});



function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") {
    res.redirect("/login");
  } else {
    let data = jwt.verify(req.cookies.token, "ssssssssssss");
    req.user = data;
    next();
  }
}


app.listen(3000, (req, res) => {
  console.log("Server is running  http://localhost:3000");
});
