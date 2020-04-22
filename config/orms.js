const orms = require("./connection");

const orm = {
    selectWhere: (tableInput, colToSearch, valOfCol) => {
      let queryString = "SELECT * FROM ?? WHERE ?? = ?";
      // SELECT * from pets WHERE animal_name == "Rachel"
      connection.query(queryString, [tableInput, colToSearch, valOfCol], (error, result) => {
        if (error) throw error;
          // console.log(result);
      });
    },
    selectAndOrder: (whatToSelect, table, orderCol) => {
      let queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
      // SELECT animal_name FROM pets ORDER BY price DESC;
      console.log(queryString);
      connection.query(queryString, [whatToSelect, table, orderCol], (error, result) => {
        if (error) throw error;
        // console.log(result);
      });
    },
    findWhoHasMost: (tableOneCol, tableTwoForeignKey, tableOne, tableTwo) => {
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