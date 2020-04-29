const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    desc:{
        type:String,
        required: true
    }, 
    category:{
        type:String,
        required: true
    }, 
    due_date:{
        type:String
    }
})

const TODO = mongoose.model('TODO', todoSchema);

module.exports = TODO;