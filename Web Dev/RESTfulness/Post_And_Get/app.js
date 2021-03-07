const express = require("express")
const app = express();
const path = require("path")
const {v4:uuid} = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(methodOverride("_method"))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"))

let comments = [
    {
        id: uuid(),
        image: 'https://images.pexels.com/photos/6822304/pexels-photo-6822304.jpeg?cs=srgb&dl=pexels-anastasiya-vragova-6822304.jpg&fm=jpg',
        username:'Todd',
        comment: 'Good morning there '
    },
    {
        id: uuid(),
        image: 'https://images.pexels.com/photos/709854/pexels-photo-709854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        username:'James',
        comment: 'Hello there ma good brother'
    },
    {
        id: uuid(),
        image: 'https://images.pexels.com/photos/1790393/pexels-photo-1790393.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        username:'Tina',
        comment: 'I WANT CHOCOLATE!!!'
    },
    {
        id: uuid(),
        image: 'https://images.pexels.com/photos/6829524/pexels-photo-6829524.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        username:'Jonathona',
        comment: 'This is just a place holders'
    },
]

app.get("/comments", (req,res) =>{
    res.render("comments/index", {comment: comments})
})

app.post("/comments", (req,res) =>{
    const {username,comment} = req.body;
    comments.push({username: username, comment: comment, id: uuid()});
    res.redirect("comments")
})

app.get("/comments/:id/edit", (req,res) =>{
    const profile = comments.find(c => c.id === req.params.id )
    res.render('comments/edit', {profile:profile});
})

app.patch("/comments/:id", (req,res) =>{
    const {id} = req.params;
    const profile = comments.find(comment => comment.id === id);
    const {editComment} = req.body;
    profile.comment = editComment;
    res.render("comments/profile", {profile:profile})
})

app.delete("/comments/:id", (req,res) =>{
    const {id} = req.params;
    const profile = comments.filter(comment => comment.id !== id);
    comments = profile;
    res.render("comments/index", {comment: comments})
})

app.get("/profile/:id", (req,res)=>{
    const profile = comments.find(c => c.id === req.params.id )
    res.render('comments/profile', {profile: profile})
})

app.listen(3000, ()=>{
    console.log("Server Started: Listening in port 3000")
})