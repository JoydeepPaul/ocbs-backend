// cinema-booking-backend/routes/booking.js
const express = require('express');
const router = express.Router();
const { confirmBooking, viewBookings, cancelBooking } = require('../controllers/bookingController');

// Route to confirm a booking
router.post('/confirm', confirmBooking);

// Route to view bookings
router.get('/view', viewBookings);

// Route to cancel a booking
router.delete('/cancel/:bookingId', cancelBooking);

module.exports = router;
