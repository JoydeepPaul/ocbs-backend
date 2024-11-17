// routes/payment.js
const express = require('express');
const router = express.Router();
const { processPayment, offlinePayment } = require('../controllers/paymentController');

// Define routes
router.post('/online', processPayment);
router.post('/offline', offlinePayment);

// Export the router
module.exports = router;
