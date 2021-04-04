const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo  CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

Product.insertMany([
    {name: "GrapeFruit", price: 2.99, category: "fruit"},
    {name: "Apple", price: 2.99, category: "fruit"},
    {name: "Cheese", price: 2.99, category: "dairy"},
    {name: "Lettuce", price: 2.99, category: "vegitable"},
    {name: "Green Pea", price: 2.99, category: "vegitable"}
])   