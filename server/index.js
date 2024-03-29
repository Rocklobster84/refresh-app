require("dotenv").config(); // load variables in process.env
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

//all routes here
app.use("/api/auth", authRoutes);

// if no route, show error
app.use(function(req, res, next){
  let err = new Error("Not Found")
  err.status = 404;
  next(err);
});
// custom error message
app.use(errorHandler);


// Start server on port
app.listen(PORT, function() {
  console.log(`Server is starting on port ${PORT}`);
});