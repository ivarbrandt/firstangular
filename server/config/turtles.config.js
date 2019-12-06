const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/turtles", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
