const express = require("express");
const app = express();

app.listen(8000, () => console.log("listening on port 8000"));
// app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/public/dist/public"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/client/views");


require('./server/routes/turtles.routes.js')(app)
require('./server/config/turtles.config')