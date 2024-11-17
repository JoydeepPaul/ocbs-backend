// bookingController.js

// Simulated booking database
const bookings = [];

// Confirm booking logic
exports.confirmBooking = (req, res) => {
  const { userId, movieTitle, showtime, seats } = req.body;
  if (!userId || !movieTitle || !showtime || !seats) {
    return res.status(400).json({ message: 'All booking details are required.' });
  }

  const booking = { userId, movieTitle, showtime, seats };
  bookings.push(booking);

  res.status(201).json({ message: 'Booking confirmed.', booking });
};

// View bookings logic
exports.viewBookings = (req, res) => {
  const { userId } = req.params;
  const userBookings = bookings.filter(booking => booking.userId === userId);
  res.status(200).json(userBookings);
};

// Cancel booking logic
exports.cancelBooking = (req, res) => {
  const { bookingId } = req.params;
  const index = bookings.findIndex(booking => booking.id === bookingId);

  if (index !== -1) {
    bookings.splice(index, 1);
    return res.status(200).json({ message: 'Booking cancelled successfully.' });
  } else {
    return res.status(404).json({ message: 'Booking not found.' });
  }
};
