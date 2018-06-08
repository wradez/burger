var orm = require("../config/orm.js");


var burgers = {
    selectAll: function(callBack){
        orm.selectAll(function(res) {
            callBack(res);
        });
    },
    insertOne: function(burgerName, callBack){
        orm.insertOne("burgers", "burger_name", burgerName, function(res) {
            callBack(res);
        });
    },
    updateOne: function(burger, condition, callBack){
        var changeBurger = "burger_name = " + burger;
        orm.updateOne("burgers", changeBurger, condition, function(res) {
            callBack(res);
        });
    }
};

//Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
//Export at the end of the burger.js file.

module.exports = burgers;