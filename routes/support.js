// routes/support.js
const express = require('express');
const router = express.Router();
const { submitQuery, viewQueryStatus } = require('../controllers/supportController');  // Ensure correct function name

// Route to submit a support query
router.post('/submit', submitQuery);

// Route to view the status of a support query
router.get('/status/:queryId', viewQueryStatus);  // Ensure this is correct

module.exports = router;
