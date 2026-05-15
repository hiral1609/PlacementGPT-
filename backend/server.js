const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'success', message: 'PlacementGPT API is running' });
});

// Mock routes for future implementation
app.use('/api/auth', (req, res) => res.json({ message: 'Auth endpoint' }));
app.use('/api/resume', (req, res) => res.json({ message: 'Resume analysis endpoint' }));
app.use('/api/interview', (req, res) => res.json({ message: 'Mock interview endpoint' }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in development mode on port ${PORT}`);
    console.log(`🚀 PlacementGPT Backend Initialized`);
});
