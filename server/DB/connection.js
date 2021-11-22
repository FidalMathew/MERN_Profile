const mongoose = require("mongoose");

const DB = process.env.DB;

mongoose
  .connect(DB)
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log(err));
