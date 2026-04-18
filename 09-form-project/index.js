const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  fs.readdir(`./files`, function (err, files) {
    res.render("index", { files: files });
  });
});

app.post("/create", (req, res) => {
 fs.writeFile(`./files/${req.body.title.split(' ').join(' ')}.txt`,
    req.body.details,function(err){
       res.redirect('/')
    });

});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
