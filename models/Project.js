const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  Id: { type: Number, required: true },
  StartDate: { type: Date, required: true },
  EndDate: { type: Date, required: true },
  Credits: { type: Number, required: true }
});

let Project = mongoose.model("Project", projectSchema);
module.exports = Project;
