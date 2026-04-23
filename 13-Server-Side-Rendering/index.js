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
   res.send(createdUser)
 })

