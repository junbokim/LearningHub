var express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.listen(3000, () => { console.log("hello!!!"); });

var friends = ["John", "James", "Jenny", "Jessica", "Jacob"];

app.get("/", function (req, res) {
    res.render("home", { friends: friends });
});

app.post("/addFriend", function (req, res) {
    const name = req.body.newFriend;
    friends.push(name);
    res.redirect("/");
})