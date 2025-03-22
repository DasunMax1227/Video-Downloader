// server.js

const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Serve HTML file
});

// Port setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
