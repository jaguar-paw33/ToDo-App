const express = require('express');
const router = express.Router();
const clear_history_controller = require('../controllers/clear_history_controller');


router.get('/', clear_history_controller.clear_history);



module.exports = router;