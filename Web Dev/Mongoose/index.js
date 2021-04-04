const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength:5,
        required: true
    },
    year: Number,
    score: {
        type:Number,
        min:[0,'score can only be positive']
    },
    rating: {
        type:String,
        enum:['PG', 'M', 'PG-15', 'R']
    },
    genre: [String]
});

const Movie =  mongoose.model('Movie', movieSchema); 

const casper = new Movie({title:"Casper the Friendly Ghost", year:2001, score:9.6, rating:"PP", genre:["Family Friendly", "Super Natural", "Child Frindly"]});
casper.save()

Movie.findOneAndUpdate({title:"Casper the Friendly Ghost"}, {score:-1}, {new:true, runValidators:true}).then(data => console.log(data))