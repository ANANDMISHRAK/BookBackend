const express = require("express");
const mongoose = require('mongoose');
const router = require("./routes/book-route");
const app = express();

// middleware 
app.use(express.json());
app.use("/books", router);  // localhost:5000/books

app.use('/', (req, res, next) => {
  res.send(" This is our startting App")
})


mongoose
  .connect("mongodb+srv://ecom:Anand@clusterecom.46lscee.mongodb.net/bookStore")
  .then(() => console.log("connection success to DB"))
  .then
  (() => {
    app.listen(5000);
  }
  )
  .catch((err) => console.log(err));
