const mongoose = require('mongoose');

const RegSchema = new mongoose.Schema({

       _id:Number,
       name:String,
       phone:Number,
       email:String,
       password:String,
       image:String
       
});


module.exports = mongoose.model('register',RegSchema);
