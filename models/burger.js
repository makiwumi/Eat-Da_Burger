// Import orm.js into burger.js
const orm = require("../config/orms");

//Orm function
const burger = {
    // Display all burgers in the db
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    // Add a new burger to the db
    insertOne: function(burgName, cb) {
        orm.insertOne(burgName,  function(res) {
            cb(res);
        });
    },
    // Change the devoured status to true
    updateOne: function(burgStatus,burgerId, cb) {
        orm.updateOne(burgStatus,burgerId, function(res) {
            cb(res);
        });
    }
  
};

module.exports = burger;