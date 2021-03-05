const express = require("express");
const app = express();
const path = require("path")

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname,'/views'))

app.get("/", (req,res)=>{
    const list = [];
    for(let i = 0; i < 10;i++){
        list.push(Math.floor(Math.random() *10 + 1))
    }
    res.render('homepage', {numList: list})
})


app.listen(3000,()=>{
    console.log("Listening on Port 3000")
})