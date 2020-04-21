//form for entering name
//stores in database
//devour removes from database
//Required external modules

const express = require("express");
const exphbs = require("express-handlebars");
const htmlRoutes = require("./routes/htmlroutes");
const path = require("path");

//App variables

const app = express();
const PORT = process.env.PORT || "8000";

//Routes Definitions
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// declare routes
app.use("/", htmlRoutes); // routes are imported using require above

//Server Activation
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});