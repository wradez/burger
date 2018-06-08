// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  selectAll: function(callBack) {
    var queryString = "SELECT burger_name FROM burgers;";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callBack(result);
    });
  },
  insertOne: function(burgerName, callBack) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (" + burgerName + ");";

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) throw err;

      callBack(result);
    });
  },
  updateOne: function(burger, callBack) {
    var queryString = "UPDATE burgers";

    queryString += " SET ";
    queryString += "devoured = true";
    queryString += " WHERE ";
    queryString += "burger_name = " + burger;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;

      callBack(result);
    });
  }
};

module.exports = orm;
