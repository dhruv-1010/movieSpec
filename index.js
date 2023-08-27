const express = require('express');
const app = express();
const path=require('path')
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))
app.use(express.static(path.join(__dirname,'/public')));

// const mongoose = require('mongoose');
// // 27017 mongo db port
// mongoose.connect('mongodb://127.0.0.1:27017/newDB')
// .then(()=>{
//     console.log('db done')
// })
// .catch(()=>{
//     console.log("error");
// });


// // const { Schema }= mongoose;
// // mongoose is my ODM
// // schema is actual the description of the objects kinda similar to desc or create table command
// const schema  = new mongoose.Schema({
//     name:String,
//     rating:Number,
//     year:Number,
//     isWatched:Boolean
// })
// // model is just an class of type schema or should i say a table
// const Movie = mongoose.model('Movie',schema)
// // the name Movie would be translated to movies in mongodb so use Capital letter at front.
// // console.log(Movie)
// // Movie.insertOne here i inserted an object into the class movies
// const ironman = new Movie({
//         name:"iron man",
//     rating:10,
//     year:2008,
//     isWatched:false
// }).save();

// // console.log(ironman)
// // ironman.save();






app.get('/',(req,res)=>{
    res.render('index')
})

// route 1 
// API ROUTE 1 INDEX ROUTE
app.get('/home',(req,res)=>{
    res.render('index');
})


// app.get('/comments',(req,res)=>{
//     res.render('index',{comments})
// })
// ROUTE 2
// new comment route




app.listen(8000,(req,res)=>{
    console.log('connected at port 8000')
})