const express = require('express');
const router = express.Router();
const delete_task_controller = require('../controllers/delete_task_controller');


router.get('/', delete_task_controller.delete_task);



module.exports = router;