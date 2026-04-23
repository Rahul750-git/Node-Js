const express = require('express')
const app = express();
const path = require('path')
const userModal = require('./models/user')
const PORT = 3000
 app.set('view engine','ejs')
 app.use(express.urlencoded({extended:false}));
 app.use(express.json());
 app.use(express.static(path.join(__dirname,"public")))

  app.listen(PORT ,(req,res)=>{
    console.log(`Server is running http://localhost:${PORT}`)
 })


 app.get('/',(req,res)=>{
    res.render ('index');
 })

 app.get('/read', async (req,res)=>{
    let users = await userModal.find()
    res.render ('read',{users});
 })

  app.post('/create', async(req,res)=>{
   let {name, email, image} =  req.body
   let createdUser = await userModal.create({
      name,
      email,
      image
   })
   res.redirect('/read')
 })
app.get("/delete/:id", async (req, res) => {
  let users = await userModal.findOneAndDelete({ _id: req.params.id });
  res.redirect('/read');
});

app.get("/edit/:userid", async (req, res) => {
  let user = await userModal.findOne({ _id: req.params.userid });
  res.render('edit',{user});
});

app.post("/update/:userid", async (req, res) => {
   let {image,name,email} = req.body;
  let user = await userModal.findOneAndUpdate({ _id: req.params.userid },{image ,name,email},{new:true});

  res.redirect('/read');
});
