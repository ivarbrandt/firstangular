const mongoose = require('mongoose')
const turtles = require('../controllers/turtles.controllers')


module.exports = app => {
    app.get("/", turtles.index)
    app.post("/createturtle", turtles.create)
    app.get("/turtles/new", turtles.newTurtlePage)
    app.get("/turtles/:id", turtles.oneTurtle)
    app.get("/turtles/edit/:id", turtles.editTurtlePage)
    app.post("/turtles/:id", turtles.edit)
    app.get("/delete/:id", turtles.delete)
}