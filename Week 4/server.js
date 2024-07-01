const express = require('express');
const app = express();
const port = 3000;

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 404 handling middleware
app.use((req, res, next) => {
  res.status(404).send('Sorry, we could not find that!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
