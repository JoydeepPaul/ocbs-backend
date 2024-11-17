const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables

// Simulated user database
const users = [];

// Sign-up logic
exports.signup = async (req, res) => {
  const { username, email, password, contactInfo } = req.body;
  
  // Basic input validation
  if (!username || !email || !password || !contactInfo) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Check if the user already exists
  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists.' });
  }

  // Hash the password
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, email, password: hashedPassword, contactInfo });
    res.status(201).json({ message: 'Account creation successful.' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating account. Please try again later.' });
  }
};

// Sign-in logic
exports.signin = async (req, res) => {
  const { username, password } = req.body;
  
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  // Verify the password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  // Generate a JWT token
  const token = jwt.sign({ username: user.username, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h', // Token expiration time
  });

  res.status(200).json({ message: 'Logged in successfully.', token });
};
