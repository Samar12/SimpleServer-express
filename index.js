var express = require("express");
var app = express();
const myRouter = require("./router/myFiles");

app.get("/", (req, res) => {
  res.send("Hello From Home Page");
});
app.get("/profile", (req, res) => {
  res.send("Hello From Profile Page");
});
app.use("/myfiles", myRouter);

// app.use("/anyThing", myRouter);

app.listen(3000);
