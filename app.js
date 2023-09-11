const express = require("express");
require("dotenv").config();
require("express-async-errors");
const app = express();
const port = process.env.PORT || 3000;
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");
const auth = require("./routers/auth");
const authMiddleWare = require("./middlewares/auth-middleware");
const product = require("./routers/product");
//middlewares

app.use(express.static("./public"));
app.use(express.json());
//routes
// app.get('/',(req,res))

//auth route
app.use("/api/v1/auth", auth);
//product route
app.use("/api/v1/products", authMiddleWare, product);
//not found
app.use(notFound);
//error handler
app.use(errorHandler);
const start = async () => {
  try {
    //connect To DB
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {}
};
start();
