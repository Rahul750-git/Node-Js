
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const PORT = 3000
const cookieparser = require('cookie-parser');

app.use(cookieparser())

// JWT 

const jwt = require('jsonwebtoken');
app.get('/',(req,res)=>{
   let token = jwt.sign({email: 'rahul@gmail.com'},'secret')
   res.cookie('token',token)
   res.send('Done')
  
}) 

app.get('/read',(req,res)=>{
   let data =  jwt.verify(req.cookies.token,'secret')

   console.log(data);
})

app.listen(3000,(req,res)=>{
    console.log(`Server is running http://localhost:${PORT}`);
})


// cookies 
// const cookieparser = require('cookie-parser');
// app.use(cookieparser())

// app.get('/read',(req,res)=>{
//     console.log(req.cookies)
//     res.send('read page');
// })



// bcrypt 
// const bcrypt = require('bcrypt');



// Set the Passward

// app.get('/',(req,res)=>{
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash("Rahul", salt, function(err, hash) {
//             console.log(hash)
//             //Plan Passward :- Rahul
//             //Hasing Passward :-$2b$10$gF/NMVAT/4HKtpmPBDIlY.r5ql7G.AoDvY1vFaG8bod8nf9H83UKe
//         });
//     });
// })
 // Compare Passward
// app.get('/',(req,res)=>{
//     bcrypt.compare("Rahul", '$2b$10$gF/NMVAT/4HKtpmPBDIlY.r5ql7G.AoDvY1vFaG8bod8nf9H83UKe', function(err, result) {
//         // result == true
//         console.log(result)
//     });
// })

