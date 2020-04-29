const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('assets'));

app.use('/', require('./routes'));

app.listen(port, (err)=>{
    if(err){
        console.log(`Error in starting Server`);
        return;
    }
    console.log(`Server is up and running at Port :: ${port}`);
})