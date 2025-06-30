const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const authentication = require('./middlewares/authentication');
const logRequest = require('./middlewares/logRequest');
const loginSignupRoutes = require('./routes/loginSignupRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

const app = express();
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ CORS setup with credentials
app.use(cors({
    origin: frontendUrl,
    credentials: true,
}));

// Custom middleware for logging requests
app.use(logRequest);

// Health check route
app.get('/', (req, res) => {
    res.status(200).json({
        connected: true,
        message: 'AM-Global API is running...',
        query: req.query
    });
});

// Auth routes
app.use('/auth', loginSignupRoutes);

// Protection middleware
app.use(authentication);

//secured route
app.use('/user', userRoutes);

// MongoDB connection and server start
mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log(`MongoDB connected at ${process.env.DB_URL}`);
        app.listen(process.env.SERVER_PORT || 3001, () => {
            console.log(`Server listening on port ${process.env.SERVER_PORT}`);
        });
    })
    .catch((err) => {
        console.error(`DB connection error: ${err.message}`);
    });
