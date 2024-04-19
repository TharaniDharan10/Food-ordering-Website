const mongoose = require('mongoose');
var db=mongoose.connect("mongodb://localhost:27017/BiteBuddy")
// (mongoURL , {useUnifiedTopology:true , useNewUrlParser:true}) 
// var db = mongoose.connection
.then(()=>console.log("Mongo DB Connection Successful"))
.catch((err)=>console.log("Mongo DB Connection Failed"))
module.exports = mongoose;
// npm config set legacy-peer-deps true       //for handling err in terminal while installing something