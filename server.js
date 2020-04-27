//form for entering name
//stores in database
//devour removes from database
//Required external modules

const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

//App variables

const app = express();
const PORT = process.env.PORT || "8000";

//Parser forms data that can be available int req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes setup to controller
const routes = require("./controllers/burger_controllers");
app.use(routes);

//Allows us to use assets static files like imgs etc
app.use(express.static("public")); 

//Server Activation
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});