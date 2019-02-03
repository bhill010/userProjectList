const mongoose = require('mongoose');
const { Schema } = mongoose;

const userProjectSchema = new Schema({
  UserId: { type: Number, required: true, ref: "User" },
  ProjectId: { type: Number, required: true, ref: "Project" },
  IsActive: { type: Boolean, required: true },
  AssignedDate: { type: Date, required: true },
});

let UserProject = mongoose.model("UserProject", userProjectSchema);
module.exports = UserProject;
