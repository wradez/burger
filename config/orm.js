// Import MySQL connection.
var connection = require("../config/connection.js");

//all functions written here SHOULD work, but I may need to update the arguments
var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(burgerName, cb) {
    var queryString = "INSERT INTO burgers ";
    queryString += "(burger_name) ";
    queryString += "VALUES (";
    queryString += burgerName;
    queryString += ");";

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateOne: function(burger, cb) {
    var queryString = "UPDATE burgers";

    queryString += " SET ";
    queryString += "devoured = true";
    queryString += " WHERE ";
    queryString += "burger_name = " + burger;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
