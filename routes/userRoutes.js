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
};
