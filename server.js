const express = require('express');
const path = require('path');
const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
