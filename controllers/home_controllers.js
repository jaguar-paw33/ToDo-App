const TODO = require('../models/todo');
const history = require('../models/history');

module.exports.home = function(req,res){

    TODO.find({},(err, tasks)=>{
        if(err){
            console.log(`Error in adding Task to DB`);
            return;
        }
        console.log(tasks[0]);
        tasks_list=tasks;
        res.render('home',{
            title:'TODO App',
            tasks_list:tasks_list
        });
    })
    
}