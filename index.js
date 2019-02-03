const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const seedDatabase = require("./config/seed");
const bodyParser = require("body-parser");
const expressSanitizer = require("express-sanitizer");
const ObjectId = mongoose.Types.ObjectId;

const User = require("./models/User");
const Project = require("./models/Project");
const UserProject = require("./models/UserProject");

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(expressSanitizer());
app.set("view engine", "ejs");

// Set public folder as root
app.use(express.static("public"));

//Run this function to seed database with initial data
// seedDatabase();

require("./routes/userRoutes")(app);
require("./routes/projectRoutes")(app);
require("./routes/userProjectRoutes")(app);

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

const PORT = process.env.PORT || 5000;
app.listen(PORT);
