const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const errorHandler = require("./controllers/errorController");

const app = express();

app.use(express.json({ limit: "10kb" }));

const db = process.env.MONGODB_URL;
const port = process.env.PORT || 5000;

const cors = require("cors");
app.use(cors({ origin: true, credentials: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// routers
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

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
