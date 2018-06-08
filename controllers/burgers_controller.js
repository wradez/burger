var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      res.render("index", {burger: data});
    });
  });
//starter code for adding new burgers
router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
        res.json({ id: result.insertId });
    });
});
//starter code for updating burgers once devoured
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: true
    }, condition, function(result) {
        if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
        } else {
        res.status(200).end();
        }
    });
});
  
module.exports = router;

