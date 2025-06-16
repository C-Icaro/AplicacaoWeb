const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const auth = require('../middlewares/auth');

router.get('/dashboard', auth, dashboardController.getDashboard);
router.get('/past-bookings', auth, dashboardController.getPastBookings);
router.post('/dashboard/search', auth, dashboardController.searchRooms);
router.post('/dashboard/book', auth, dashboardController.bookRoom);
router.post('/dashboard/cancel', auth, dashboardController.cancelReservation);

module.exports = router; 