const express = require("express");
const multer = require("multer");
const app = express();
const crypto = require("crypto");
const path = require("path");
// const upload = multer()


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads");
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, function (err, bytes) {
      const fn = bytes.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });
  },
});

const upload = multer({storage: storage})

app.set("view engine", "ejs");

app.get("/test", (req, res) => {
  res.render("test");
});

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file)
});

app.listen(3000, (req, res) => {
  console.log("Server is running http://localhost:3000");
});
