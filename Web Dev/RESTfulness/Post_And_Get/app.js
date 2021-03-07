const express = require("express")
const app = express();
const path = require("path")

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"))

const comments = [
    {
        username:'Todd',
        comment: 'Good morning there '
    },
    {
        username:'James',
        comment: 'Hello there ma good brother'
    },
    {
        username:'Tina',
        comment: 'I WANT CHOCOLATE!!!'
    },
    {
        username:'Jonathona',
        comment: 'This is just a place holders'
    },
]

app.get("/comments", (req,res) =>{
    res.render("comments/index", {comment: comments})
})

app.get("/comments/new",(req,res) =>{
    res.render("Comments/new");
})

app.post("/comments", (req,res) =>{
    const {username,comment} = req.body;
    comments.push({username: username, comment: comment});
    res.redirect("comments")
})

app.get("/profile", (req,res)=>{
    console.log(req.body)
    res.send(`Sending from Get ${req.body.Name}, ${req.body.Age}`)
})

app.post("/profile", (req,res) =>{
    console.log(req.body)
    res.send(`Sending from Post ${req.body.Name}, ${req.body.Age}`)
})

app.listen(3000, ()=>{
    console.log("Server Started: Listening in port 3000")
})