const express = require('express');
const router = express.Router();

const { bookingLimiter } = require('../middlewares/rateLimiters');
const bookingsController = require('../controllers/bookings');

router.post('/', bookingLimiter, bookingsController.createBooking);

module.exports = router;
