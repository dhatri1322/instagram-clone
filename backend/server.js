const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes'); // Import routes correctly
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000', // Update to match your frontend's URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Connect to MongoDB
connectDB();

// Middleware for parsing JSON
app.use(express.json());

// Route configuration
app.use('/api', userRoutes); // API routes are prefixed with /api

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
