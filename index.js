const express = require('express');
const cors = require('cors');
const headlineTemplates = require('./headlines');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Replace template placeholders
const generateHeadline = (name, location) => {
  const randomIndex = Math.floor(Math.random() * headlineTemplates.length);
  const template = headlineTemplates[randomIndex];
  return template.replace(/{name}/g, name).replace(/{location}/g, location);
};

// POST /business-data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required' });
  }

  const rating = (Math.random() * 1 + 4).toFixed(1); // 4.0–5.0
  const reviews = Math.floor(Math.random() * 200 + 50); // 50–250
  const headline = generateHeadline(name, location);

  res.json({ rating, reviews, headline });
});

// GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;

  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required' });
  }

  const headline = generateHeadline(name, location);
  res.json({ headline });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
