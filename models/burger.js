var orm = require("../config/orm.js");


var burgers = {
    selectAll = function(cb){
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne = function(burgerName, cb){
        orm.insertOne("burgers", "burger_name", burgerName, function(res) {
            cb(res);
        });
    },
    updateOne = function(burger, cb){
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

//Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
//Export at the end of the burger.js file.

module.exports = burgers;