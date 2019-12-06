const Turtle = require("../models/turtles.models.js")

module.exports.index = function(req, res) {
  Turtle.find()
    .then(turtles => res.render("index", { turtles }))
    .catch(err => res.json(err));
};

module.exports.create = function(req, res) {
  const turtle = new Turtle();
  turtle.name = req.body.name;
  turtle.color = req.body.color;
  turtle.age = req.body.age;
  turtle
    .save()
    .then(newTurtleData => res.redirect("/"))
    .catch(err => console.log(err));
};

module.exports.newTurtlePage = function(req, res) {
  res.render("newturtlepage");
};

module.exports.oneTurtle = function(req, res) {
  Turtle.findOne({ _id: req.params.id })
    .then(turtdeets => res.render("turtledetailspage", { turtdeets }))
    .catch(err => res.json(err));
};

module.exports.editTurtlePage = function(req, res) {
  Turtle.findOne({ _id: req.params.id })
    .then(unoturtle => res.render("editturtlepage", { unoturtle }))
    .catch(err => res.json(err));
};

module.exports.edit = function(req, res) {
  Turtle.updateOne(
    { _id: req.params.id },
    {
      name: req.body.name,
      color: req.body.color,
      age: req.body.age
    }
  )
    .then(updatedturtle => res.redirect("/"))
    .catch(err => res.json(err));
};

module.exports.delete = function(req, res) {
  Turtle.deleteOne({ _id: req.params.id }).then(deletedturtle => res.redirect("/")
  );
};
