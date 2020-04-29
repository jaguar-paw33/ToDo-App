const history = require('../models/history');


module.exports.clear_history = function(req,res){
    var task = req.query.id;
        var arr = task.split(',');
        arr.pop();
        for(let id of arr){
            history.findByIdAndDelete(id, (err)=>{
                if(err){
                    console.log('Error is removing task from DB');
                    return;
                }
            })
        }
        res.redirect('back');
};