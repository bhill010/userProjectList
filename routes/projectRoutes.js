const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

module.exports = app => {
  // GET projects
  app.get("/projects", function(req, res, next) {
    Project.find({}, function(err, allProjects) {
      if (err) {
        console.log(err);
      } else {
        res.send(allProjects);
      }
    });
  });

  // SHOW a project
  app.get("/projects/:id", function(req, res) {
    Project.findById(req.params.id, function(err, foundProject) {
      if (err) {
        console.log(err);
      } else {
        res.send(foundProject);
      }
    });
  });
};
