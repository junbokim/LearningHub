var express = require("express");
var app = express();

app.get("/", function(req, res){ 
    res.send("hi there");
});

app.get("/bye", function(req, res){
    res.send("good bye");
});

app.get("/r/:name", function(req,res){
    res.send("This website is about "+ req.params.name +"!!!");
});

app.get("*", function(req, res){
    res.send("This is the website whenever you dont do what you are suppose to do");
});


app.listen(200, process.env.IP, function(){
    console.log("Server has started!");
});