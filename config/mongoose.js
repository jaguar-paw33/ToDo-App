const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todo_db');

const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', ()=>{
    console.log(`Successfully connected to MongoDB`);
})