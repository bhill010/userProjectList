const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const seedDatabase = require('./config/seed');
const bodyParser = require("body-parser");
const expressSanitizer = require("express-sanitizer");
var ObjectId = mongoose.Types.ObjectId;

const User = require('./models/User');
const Project = require('./models/Project');
const UserProject = require('./models/UserProject');



mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(expressSanitizer());
app.set("view engine", "ejs");

// Set public folder as root
app.use(express.static('public'));

// Allow front-end access to node_modules folder
// app.use('/scripts', express.static(`${__dirname}/node_modules/`));

/* Run this function to seed database with initial data
*/
// seedDatabase();

// require("./routes/userRoutes")(app);
// require("./routes/projectRoutes")(app);

// Redirect all traffic to index.html
// app.use((req, res) => res.sendFile(`${__dirname}/public/index.ejs`));

app.get("/", function(req, res){
  res.redirect("/users");
});

app.get("/users", function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      res.render("index", {users: users});
    }
  });
});

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

// app.get("/users/:id/projects", function(req, res) {
//   let id = JSON.parse(req.params.id)
//   UserProject.find({ UserId: new ObjectId(id) }, function(err, userReference) {
//     if (err) {
//       console.log(err);
//       res.redirect("/users");
//     } else {
//       res.send(userReference);
//     }
//   });
// });

// app.get("/users/:id/projects", function(req, res) {
//   UserProject.find({ UserId: req.params.id }, function(err, userReference) {
//     if (err) {
//       console.log(err);
//       res.redirect("/users");
//     } else {
//       res.send(userReference);
//     }
//   });
// });

app.get("/users/:id/projects", function(req, res) {
  UserProject.find({ UserId: req.params.id }).exec()
    .then(userProjects => {
      console.log("userProjects :", userProjects);
      console.log("userProjects projectId :", userProjects.ProjectId);
      let projectIds = [];
      userProjects.forEach(item => {
        projectIds.push(item.ProjectId)
      });
      console.log("projectIds :", projectIds);
      return Project.find({ Id: { $in: projectIds } }).exec()
        .then(projects => {
          res.render("show", { projects: projects, userProjects: userProjects });
          // res.send({ projects: projects, userReference: userReference });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/projects/:id", function(req, res) {
  Project.findById(req.params.id, function(err, project) {
    if (err) {
      console.log(err);
    } else {
      res.render("show", {project: project});
    }
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);
