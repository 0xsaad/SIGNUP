var mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  address: String,
  age:Number,
  imagePath: String
});

module.exports = mongoose.model("Form", formSchema);