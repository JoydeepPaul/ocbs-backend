// cinema-booking-backend/routes/notifications.js
const express = require('express');
const router = express.Router();
const { sendConfirmation } = require('../controllers/notificationController');

// Route to send booking confirmation notifications
router.post('/send-confirmation', sendConfirmation);

module.exports = router;
