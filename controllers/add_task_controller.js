const TODO = require('../models/todo');
const history = require('../models/history');

var tasks_list=[];

module.exports.add_task = function(req,res){
    
    var task = req.body;
    var date = task.due_date;
    if(date!='')
    {
    date = new Date(date); // to change date date, month_name, year format (ISO format)
    date = date.toString(); 
    var arr = date.split(' ');
    date = (arr[1]+' '+arr[2]+', '+arr[3]).toString();
    }
    else date='No Deadline'
    task.due_date=date;
    TODO.create(task,(err, newTask)=>{
        if(err){
            console.log(`Error in adding Task to DB`);
            return;
        }
        tasks_list.push(newTask);
        
    })
    history.create(task,(err,duplicate)=>{
        if(err){
            console.log(`Error creating a Duplicate`);
            return;
        }
    })
    res.redirect('back');

};