const mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
const Project = require("../models/Project");
const User = require("../models/User");
const UserProject = require("../models/UserProject");

// app.get("/users/:id/projects", function(req, res, next) {
//   User.find({}, function(err, users) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.render("index", {users: users});
//     }
//   });
// });

app.get("/users/:id/projects", function(req, res) {
  UserProject.find({ UserId: req.params.id }, function(err, userReference) {
    if (err) {
      console.log(err);
      res.redirect("/users");
    } else {
      res.send(userReference);
    }
  });
});
