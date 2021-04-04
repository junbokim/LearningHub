const { SSL_OP_CRYPTOPRO_TLSEXT_BUG } = require('constants');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const Product  = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo  CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegitable', 'dairy'];

app.get('/products', async (req,res) =>{
    const products = await Product.find({}); 
    console.log(products);
    res.render('products/index', {products});
})

app.get('/products/new', (req,res)=>{
    res.render("products/newProduct", {categories})
})

app.post('/products', async (req,res) =>{
    const product = new Product(req.body);
    await product.save();
    res.redirect(`/products/${product._id}`);
})

app.get('/products/:id',async (req,res) =>{ 
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/show', {product});
})

app.get('/products/:id/edit', async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', {product, categories});
})

app.put('/products/:id', async (req,res) =>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new:true}); 
    res.redirect(`/products/${product._id}`);
})

app.delete('/products/:id', async(req,res) =>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(3000, ()=>{
    console.log("app is listening on port 3000!"); 
})