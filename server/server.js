// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // Change port as needed

// Mock products data
const products = require('./products.json');

// API endpoint to get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
