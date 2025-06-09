const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/dashboard', dashboardController.getDashboard);
router.post('/dashboard/search', dashboardController.searchRooms);
router.post('/dashboard/book', dashboardController.bookRoom);

module.exports = router; 