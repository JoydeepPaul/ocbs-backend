// supportController.js

// Simulated support query system
const supportQueries = [];

// Submit query logic
exports.submitQuery = (req, res) => {
  const { userId, issue } = req.body;
  if (!userId || !issue) {
    return res.status(400).json({ message: 'User ID and issue are required.' });
  }

  const query = { userId, issue, status: 'Pending' };
  supportQueries.push(query);

  res.status(201).json({ message: 'Query submitted successfully.', query });
};

// View query status logic
exports.viewQueryStatus = (req, res) => {
  const { queryId } = req.params;  // Assuming queryId is part of the URL
  const query = supportQueries.find(q => q.id === queryId);

  if (query) {
    res.status(200).json(query);
  } else {
    res.status(404).json({ message: 'Query not found.' });
  }
};
