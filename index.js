require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const db = require('./config/mongoose');
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('assets'));

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the Server : ${err}`);
        return;
    }
    console.log(`Server is up and running on Port : ${port}`);
})