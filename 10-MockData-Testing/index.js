const express = require("express");
const fs = require('fs')
const app = express();
const users = require("./MOCK_DATA.json");
const { json } = require("stream/consumers");

const PORT = 3000;

//MiddleWare 
app.use(express.urlencoded({extended: false}))
app.listen(PORT, (req, res) => {
  console.log(`Server is running for http://localhost:${PORT}`);
});

//RestFul Api
app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
 <ul>
 ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
 </ul>
 `;
  res.send(html);
});

//Dynamic Path Parameters
app.route('/api/users/:id')
.get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
  res.json(user);
})
.patch((req,res)=>{
    //Edit user with id
    res.json({status: 'Pending'})
})
.delete((req,res)=>{
    //TODO: delete  the user with id
    res.json({status:'pending'})
})


app.post('/api/users',(req,res)=>{
    //TODO: Create new user
   const  body = req.body;
  users.push({...body,id: users.length+1})
  fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
  res.json({status:'success', id: users.length});
  })
   
})

// app.patch('/api/users/:id',(req,res)=>{
//     //TODO: Edit  the user with id
//     res.json({status:'pending'})
// })

// app.delete('/api/users/:id',(req,res)=>{
//     //TODO: delete  the user with id
//     res.json({status:'pending'})
// })