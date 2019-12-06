const mongoose = require('mongoose')

const TurtleSchema = new mongoose.Schema(
  {
    name: String,
    color: String,
    age: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Turtle", TurtleSchema);