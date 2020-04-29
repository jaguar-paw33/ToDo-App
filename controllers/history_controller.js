const history = require('../models/history');

var history_tasks;
module.exports.history_view = function(req,res){

    history.find({},(err,tasks)=>{
        if(err){
            console.log(`Error in fetching History from DB`);
            return;
        }
        history_tasks=tasks;
        return res.render('history',{
            title:'TODO History',
            history_tasks:history_tasks
        })
    })

};