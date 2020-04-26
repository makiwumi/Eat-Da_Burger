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
    updateOne: () => {
      let queryString =
        "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
        // SELECT tableOneCol, COUNT(tableOneCol) as count from tableOne LEFT JOIN tableTwo ON tableTwo.tableTwoForeignKey = tableOne.id GROUP BY tableOneCol . . 
        // SELECT buyer_name, count(buyer_name) as count from buyers LEFT JOIN pets on pets.buyer_id = buyers.id GROUP BY buyer_name ORDER BY count DESC LIMIT 1;
        connection.query(
        queryString,
        [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
        (error, result) => {
          if (error) throw error;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;