//Import mysql connection
const connection = require("./connection");

//ORM to select/insert burger/update burger
const orm = {
    selectAll: (burInfo) => {
      let queryString = "SELECT * FROM burgers";
      // SELECT * from table made in burgers_db (burgers)
      connection.query(queryString, (error, result) => {
        if (error) throw error;
          // console.log error;
          console.log("mySQL select query error:" + error);

          //return result
          console.log("Data selection was successfull");
          burInfo(result);
      });
    },
    insertOne: (burgName, burInfo) => {
      let queryString = "INSERT INTO burgers (burgename, devoured) VALUES ('" + burgName + "', false)";
      // INSERT burgername to table made in burgers_db (burgers)
      console.log(queryString);
      connection.query(queryString, (error, result) => {
        if (error) throw error;
        /// console.log error;
        console.log("mySQL select query error:" + error);

        //return result
        console.log("A wild burger has appeared: " + burgName + "!");
        burInfo(result);
      });
    },
    updateOne: (burgStatus,burgerId, burInfo) => {
      let queryString =
        "UPDATE burgers SET devoured = " + burgStatus + " WHERE id = " + burgerId;
        // Update burgers when burger is devoured
        
        connection.query(queryString, (error, result) => {
          if (error) throw error;
          /// console.log error;
          console.log("mySQL select query error:" + error);
          //return result
          console.log("Your burger has been updated");
          burInfo(result);
        });
    }
  };
  
  module.exports = orm;