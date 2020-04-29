const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    desc:{
        type:String
    },
    category:{
        type:String
    },
    due_date:{
        type:String
    }
})


const history = mongoose.model('history', historySchema);

module.exports = history;
