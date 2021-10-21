const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const productRouter = require("./routes/productRoute");
const errorHandler = require("./controllers/errorController");

const app = express();

app.use(express.json({ limit: "10kb" }));

const db = process.env.MONGODB_URL;
const port = process.env.PORT || 3000;

app.use("/api/products", productRouter);

// handling errors
app.use(errorHandler);

mongoose
  .connect(db)
  .then((result) => {
    console.log("database connected");
    app.listen(port);
  })
  .catch((err) => {
    console.log(err.message);
  });
