const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controllers');

router.get('/',homeController.home);
router.use('/add_task', require('./add_task'));
router.use('/delete_task', require('./delete_task'));
router.use('/history', require('./history'));



module.exports = router;
