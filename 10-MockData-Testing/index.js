const express = require("express");
const fs = require("fs");
const app = express();
const users = require("./MOCK_DATA.json");

const PORT = 3000;

//MiddleWare
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `${Date.now()}:${req.ip}: ${req.method}: ${req.path}\n`,
    (err, data) => {
      next();
    },
  );
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running for http://localhost:${PORT}`);
});

//RestFul Api
app.get("/api/users", (req, res) => {
  // Custom Header
  res.setHeader("x-myName", "Rahul");
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
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    res.json(user);
  })
  .patch((req, res) => {
    //Edit user with id
    res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    //TODO: delete  the user with id
    res.json({ status: "pending" });
  });

app.post("/api/users", (req, res) => {
  //TODO: Create new user
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.Job_Title ||
    !body.gender
  ) {
    return res.status(400).json({ msg: "All fields are require.." });
  } else {
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      res.status(201).json({ status: "success", id: users.length });
    });
  } 
});

// app.patch('/api/users/:id',(req,res)=>{
//     //TODO: Edit  the user with id
//     res.json({status:'pending'})
// })

// app.delete('/api/users/:id',(req,res)=>{
//     //TODO: delete  the user with id
//     res.json({status:'pending'})
// })
