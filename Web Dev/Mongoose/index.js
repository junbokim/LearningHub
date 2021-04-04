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

movieSchema.methods.greet = function(){
    console.log("Hello");
    console.log(`this is from ${this.title}`);
}

movieSchema.statics.superRating = function(){
    return this.updateMany({}, {score:10})
}

movieSchema.virtual('description')
    .get(function() {
    return `${this.title} has a rating of ${this.rating}`}) 
    .set(function(v) {
        this.year = v.substr(0,v.indexOf(' '));
        this.score = v.substring(v.indexOf(' ')+1); 
    })

const Movie =  mongoose.model('Movie', movieSchema); 

const casper = new Movie({title:"Casper the Friendly Ghost", year:2001, score:9.6, rating:"PG", genre:["Family Friendly", "Super Natural", "Child Frindly"]});
casper.greet();
 

Movie.superRating().then(res => console.log(res));

// Movie.findOneAndUpdate({title:"Casper the Friendly Ghost"}, {score:1}, {new:true, runValidators:true}).then(data => console.log(data))