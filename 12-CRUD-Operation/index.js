const express = require("express");
const app = express();
const PORT = 3000;
const userModel = require("./DB.js");

app.listen(PORT, (req, res) => {
  console.log(`Server is running http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello Node js");
});

//Create the user Data
app.get("/create", async (req, res) => {
  let newUser = await userModel.create({
    name: "Manoj Jain",
    username: "Manoj",
    email: "manoj123@gmail.com",
  });
  res.send(newUser);
});

//update the user Data
app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    { username: "rahul" },
    { name: "Rahul Sharma" },
    { new: true },
  );
  res.send(updatedUser);
});

// read the data

app.get("/read", async (req, res) => {
  let readuser = await userModel.find();
  res.send(readuser);
});

// Delete the user
app.get("/delete", async (req, res) => {
  let deleteuser = await userModel.findOneAndDelete({ username: "Manoj" });
  res.send(deleteuser);
});
