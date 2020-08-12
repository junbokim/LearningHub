var express = require("express");
var app = express();

app.get("/", function(req, res){ 
    res.send("hi there");
});

app.get("/bye", function(req, res){
    res.send("good bye");
})

app.listen(200, process.env.IP, function(){
    console.log("Server has started!");
});