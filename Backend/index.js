const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage
let users = [];

// Routes
app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/register', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: 'Name and email required' });

  const newUser = { name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start server
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
