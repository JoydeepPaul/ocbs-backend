// cinema-booking-backend/routes/movies.js
const express = require('express');
const router = express.Router();
const { searchMovies, selectShowtime } = require('../controllers/movieController');

// Route to search for movies
router.get('/search', searchMovies);

// Route to select a showtime for a movie
router.post('/select-showtime', selectShowtime);

module.exports = router;
