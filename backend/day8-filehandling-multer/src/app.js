const express = require("express");
const fileRoute = require("./routes/file.route");

const app = express();

app.use(express.json());

// without middleware
// app.get("/", (req, res) => {
//   res.send("backend running successfully");
// });

// understanding middleware
app.get("/", (req,res,next) => {
  // res.send('I am middleware');
  next()
},(req, res) => {
  res.send("backend running successfully");
});

app.use("/file", fileRoute);

module.exports = app;
