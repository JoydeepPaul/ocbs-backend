// controllers/notificationController.js

// Simulated notification sending function
exports.sendConfirmation = (req, res) => {
  const { userEmail, bookingDetails } = req.body;

  if (!userEmail || !bookingDetails) {
    return res.status(400).json({ message: 'User email and booking details are required.' });
  }

  // Simulate sending confirmation
  const notificationSuccess = true;

  if (notificationSuccess) {
    res.status(200).json({ message: 'Booking confirmation sent successfully.' });
  } else {
    res.status(500).json({ message: 'Failed to send booking confirmation. Please try again.' });
  }
};
