const TODO = require('../models/todo');

module.exports.home = function(req,res){

    TODO.find({},(err, tasks)=>{
        if(err){
            console.log(`Error in fetching tasks from DB`);
            return;
        }
        tasks_list=tasks;
        res.render('home',{
            title:'TODO App',
            tasks_list:tasks_list
        });
    })
    
}