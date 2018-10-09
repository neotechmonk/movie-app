const express = require("express");
const router = express.Router();
var path = require("path");

//Import Controllers
const movieController = require("./movie.controller");

// test
//router.get("/index.html", movieController.test);

router.all("/index.html", function(req, res) {
  console.log("in index");
  //   res.sendFile("public/app.html",__dirname);
  //res.render("public/app.html");

  res.sendFile(path.join(__dirname+'/../public/app.html'));
});
module.exports = router;
