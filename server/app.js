const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({ path: "./config.env" });

require("./DB/connection");
app.use(express.json());

const User = require("./Model/userSchema");
app.use(require("./Router/auth"));

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log("its middleware time!!");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/about", middleware, (req, res) => {
  res.send("Hello About page");
});

app.get("/contact", (req, res) => {
  res.send("Hello Contact Page");
});

app.get("/signin", (req, res) => {
  res.send("Hello signin Page");
});

app.get("/signup", (req, res) => {
  //Registration
  res.send("Hello signup Page");
});

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
