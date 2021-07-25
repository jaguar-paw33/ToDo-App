const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI)

const uri = process.env.MONGODB_URI || "mongodb+srv://priyank_mishra:priyank-todo@cluster0.lgzdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri || 'mongodb://localhost/todo_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', ()=>{
    console.log(`Successfully connected to MongoDB`);
})