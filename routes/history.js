const express = require('express');
const router = express.Router();
const history_controller = require('../controllers/history_controller');

router.get('/',history_controller.history_view);

router.use('/clear_history', require('./clear_history'));

module.exports = router;