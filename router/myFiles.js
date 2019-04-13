var express = require("express");
const fs = require("fs-extra");
var path = require("path");
const myRouter = express.Router();

myRouter.get("/", async (req, res) => {
  let files = await fs.readdir("./assets");
  res.send(files);
});

myRouter.get("/:fileName", (req, res) => {
  debugger;
  let ImgName = req.params.fileName;
  res.sendFile(path.join(__dirname, `./../assets/${ImgName}.jpg`));
});

module.exports = myRouter;
