const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  Id: { type: Number, required: true },
  FirstName: { type: String, required: true, maxlength: 50 },
  LastName: { type: String, required: true, maxlength: 50 }
});

let User = mongoose.model("User", userSchema);
module.exports = User;
