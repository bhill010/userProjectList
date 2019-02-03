const mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
const User = require("../models/User");

module.exports = app => {
  // GET users
  app.get("/users", function(req, res, next) {
    User.find({}, function(err, allUsers) {
      if (err) {
        console.log(err);
      } else {
        res.send(allUsers);
      }
    });
  });

  // SHOW a user
  app.get("/users/:id", function(req, res) {
    User.findById(req.params.id, function(err, foundUser) {
      if (err) {
        console.log(err);
        res.redirect("/users");
      } else {
        res.send(foundUser);
      }
    });
  });

};
