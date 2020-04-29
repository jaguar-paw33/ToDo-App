const TODO = require('../models/todo');
const history = require('../models/history');


module.exports.delete_task = function(req,res){
    var task = req.query.id;
        var arr = task.split(',');
        arr.pop();
        for(let id of arr){
            TODO.findByIdAndDelete(id, (err)=>{
                if(err){
                    console.log('Error is removing task from DB');
                    return;
                }
            })
        }
        res.redirect('back');
};