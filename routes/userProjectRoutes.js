const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const User = require("../models/User");
const UserProject = require("../models/UserProject");

module.exports = app => {
  // GET all projects associated with a user
  app.get("/users/:id/projects", function(req, res) {
    UserProject.find({ UserId: req.params.id })
      .exec()
      .then(userProjects => {
        let projectIds = [];
        userProjects.forEach(item => {
          projectIds.push(item.ProjectId);
        });
        return Project.find({ Id: { $in: projectIds } })
          .sort('Id')
          .exec()
          .then(projects => {
            if (req.xhr) {
              res.json({ id: req.params.id, projects: projects, userProjects: userProjects })
            } else {
              res.send({ projects: projects, userReference: userReference });
            }
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  });

}
