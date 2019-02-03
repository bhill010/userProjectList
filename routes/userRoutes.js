const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require("../models/User");

module.exports = app => {
  // GET users (default route)
  app.get("/", function(req, res, next) {
    User.find({})
      .sort("FirstName")
      .exec()
      .then(users => {
        res.render("index", { users: users });
      })
      .catch(err => {
        console.log(err);
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
