// movieController.js

// Simulated movie database
const movies = [
  { title: 'Movie 1', genre: 'Action', releaseDate: '2024-01-01' },
  { title: 'Movie 2', genre: 'Drama', releaseDate: '2024-02-15' },
  // Add more movies as needed
];

// Movie search logic
exports.searchMovies = (req, res) => {
  const { title, genre, releaseDate } = req.query;
  let results = movies;

  // Filter movies based on query parameters
  if (title) {
    results = results.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
  }
  if (genre) {
    results = results.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
  }
  if (releaseDate) {
    results = results.filter(movie => movie.releaseDate === releaseDate);
  }

  // If no movies are found
  if (results.length === 0) {
    return res.status(404).json({ message: 'No movies found matching the criteria' });
  }

  // Return filtered results
  res.status(200).json(results);
};

// Select showtime logic (dummy function for now)
exports.selectShowtime = (req, res) => {
  const { movieTitle, showtime } = req.body;
  
  // Simulate selecting a showtime for a movie
  if (!movieTitle || !showtime) {
    return res.status(400).json({ error: 'Movie title and showtime are required' });
  }
  
  // For now, just return a confirmation message
  res.status(200).json({
    message: `Showtime for '${movieTitle}' has been selected at ${showtime}.`
  });
};
