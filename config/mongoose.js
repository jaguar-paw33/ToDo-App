const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

mongoose.connect(uri || 'mongodb://localhost/todo_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', ()=>{
    console.log(`Successfully connected to MongoDB`);
})