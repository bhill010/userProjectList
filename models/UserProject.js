const mongoose = require('mongoose');
const { Schema } = mongoose;

const userProjectSchema = new Schema({
  UserId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  ProjectId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Project" },
  IsActive: { type: Boolean, required: true },
  AssignedDate: { type: Date, required: true },
});

let UserProject = mongoose.model("UserProject", userProjectSchema);
module.exports = UserProject;
