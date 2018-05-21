var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");


var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

var routes = require ("./controllers/burgers_controller.js")

app.use("/", routes)

// start the server
app.listen(PORT, function() {
	console.log("app listening on port " + PORT);
});